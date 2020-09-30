import { Base } from '../common/base-class';
import { Commander, ISSHConfigs } from '../commander';
import { Dictionory } from './dictionory';
import { runInThisContext } from 'vm';
import { Tracing } from 'trace_events';

const logger = require('debug')('zlog360:os-access:user');

interface BaseOpts {
   username: string;
}

export interface IUserAddOpts extends BaseOpts {
  'base-dir'?: string;
  b?: string;
  comment?: string;
  c?: string;
  'home-dir'?: string;
  d?: string;
  defaults?: boolean;
  e?: string;
  expiredate?: string;
  f?: string;
  inactive?: string;
  g?: string;
  gid?: string;
  G?: string
  groups?: string
  h?: boolean;
  help?: boolean;
  k?: string;
  skel?: string;
  K?: string;
  key?: string;
  l?: boolean;
  'no-log-init'?: boolean;
  m?: boolean;
  'create-home'?: boolean;
  M?: boolean;
  'no-create-home'?: boolean;
  N?: boolean;
  'no-user-group'?: boolean;
  o?: boolean;
  'non-unique'?: boolean;
  p?: string;
  password?: string;
  r?: boolean;
  system?: boolean;
  R?: string;
  root?: string;
  s?: string;
  shell?: string;
  u?: string;
  uid?: string;
  U?: boolean;
  'user-group'?: boolean;
  Z?: string;
  'selinux-user'?: string;
  extrausers?: boolean;
}

export interface IUserDelOpts extends BaseOpts {
    f?: boolean;
    force?: boolean;
    h?: boolean;
    help?: boolean;
    r?: boolean;
    remove?: boolean;
    R?: string;
    root?: string;
    Z?: boolean;
    'selinux-user'?: boolean;
}

export interface IPassOpts  extends BaseOpts {
  a?: boolean;
  all?: boolean;
  d?: boolean;
  delete?:boolean;
  e?: boolean;
  expire?: boolean;
  k?: boolean;
  'keep-tokens'?: boolean;
  i?: string;
  inactive?: string;
  l?: boolean;
  lock?: boolean;
  n?: number;
  mindays?: number;
  q?: boolean;
  quiet?: boolean;
  r?: string;
  repository?: string;
  R?: string;
  root?: string;
  S?: boolean;
  status?: boolean;
  u?: boolean;
  unlock?: boolean;
  w?: number;
  warndays?: number;
  x?: number;
  maxdays?: number;
  passphrase: string;
};

interface INewUser {
    user: IUserAddOpts;
    password: IPassOpts;
}

export class User extends Base {
  configs: ISSHConfigs;
  private cmd: Commander;
  private dict: any = Dictionory;
  constructor(c?: ISSHConfigs) {
    super();
    this.configs = c;
    this.cmd = new Commander(this.configs);
  }
  async create(opts: INewUser): Promise<any> {
    const { user, password } = opts;
    password.username = user.username;
    await this.useradd(user);
    return this.passwd(password);
  }
  update(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  remove(opts: IUserDelOpts): Promise<any> {
    return this.userdel(opts);
  }
  list(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async exists(opts: {username: string}): Promise<boolean> {
    this.cmd.shCommand = 'id';
    const rslts = await this.runCompose('id', opts);
    console.log(rslts);
    return rslts.includes('no such user') ? false : true;
  }
  async useradd(opts: IUserAddOpts) {
    const { username } = opts;
    const existing = await this.exists({ username });
    if(!existing) {
      this.cmd.shCommand = 'useradd';
      return this.runCompose('useradd', opts);
    } else
      return Promise.resolve({ exists: true});
  }
  async userdel(opts: {username: string}) {
    const { username } = opts;
    const existing = await this.exists({ username });
    if(existing) {
      this.cmd.shCommand = 'userdel';
      return this.runCompose('userdel', opts);
    } else
      return Promise.resolve(true);
  }
  async passwd(opts: IPassOpts) {
    const { username } = opts;
    const existing = await this.exists({ username });
    if(existing) {
      this.cmd.shCommand = 'passwd';
      return this.runCompose('passwd', opts);
    } else
      return Promise.resolve(true);
  }
  /**
   * @description Function runs the target command of docker compose with flags schema
   * @param target {string} command e.g. build, up, down
   * @param opts {any} options or flags for the object
   */
  async runCompose(target: string, opts: any) {
      const { flags } = this.dict.get(target);
      return this.execActionCommand(target, opts, flags);
  }
  execActionCommand(action: string, opts?: any, flags?: any) {
    if(opts) {
        this.cmd.shCommand = `${this.cmd.shCommand} ${this.parseCommand(flags, opts)}`;
    }
    logger('commad: ',this.cmd.shCommand);
     return this.execRes();
  }
  parseCommand(flags: any,data: any, strcommand: string = '') {
    const keys = Object.keys(flags);
    let cmd = keys.map((key: string) => {
      const { flag, deli, value } = flags[key];
      return data[key] ? `${flag}${deli}${value ? data[key] : ''}` : '';
    })
    .filter((c: string) => c.length > 1).join(' ');
    cmd = data.service ? `${cmd} ${data.service}` : cmd;
    cmd = data.private_port ? `${cmd} ${data.private_port}` : cmd;
    return cmd;
  }
  async execRes() {
    try {
        const data = await this.cmd.exec();
        const res = data.stdout.length > 1
        ? data.stdout.split('\n').filter((i: string) => i.length > 1)
        : data.stderr;

        this.cmd.clearCmd();
        return res;
    } catch (e) {
        return e;
    }
}

}
