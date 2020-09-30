export interface IFlagObject { 
    [flagName: string]: { 
        flag: string;
        deli: string; 
        value: boolean;
    }; 
};
export const BASE = {
    username: { flag: " ", deli:"", value: true }
}

export const USER_ADD: IFlagObject = {
    "base-dir": { flag: "--base-dir", deli: " ", value: true }, 
    b: { flag: "-b", deli: " ", value: true },
    comment: { flag: "--comment", deli: " ", value: true },
    c: { flag: "-c", deli: " ", value: true }, 
    "home-dir": { flag: "--home-dir", deli: " ", value: true }, 
    d: { flag: "-d", deli: " ", value: true }, 
    defaults: { flag: "--defaults", deli: " ", value: false },
    expiredate: { flag: "--expiredate", deli:" ", value: true },
    e: { flag: "-e", deli:" ", value: true },
    // password inactivity period of the new account
    f: { flag: "-f", deli:" ", value: true },
    inactive: { flag: "--inactive", deli:" ", value: true },
    // name or ID of the primary group of the new
    g: { flag: "-g", deli:" ", value: true },
    gid: { flag: "--gid", deli:" ", value: true },
    G: { flag: "-G", deli:" ", value: true },
    groups: { flag: "--groups", deli:" ", value: true },
    // display this help message and exit
    h: { flag: "-h", deli:" ", value: false },
    help: { flag: "--help", deli:" ", value: false },
    // use this alternative skeleton directory
    k: { flag: "-k", deli:" ", value: true },
    skel: { flag: "--skel", deli:" ", value: true },
    // -K, --key KEY=VALUE override /etc/login.defs defaults 
    K: { flag: "-K", deli:" ", value: true },
    key: { flag: "--key", deli:" ", value: true },          
    // -l, --no-log-init do not add the user to the lastlog and faillog databases
    l: { flag: "-l", deli:" ", value: false },
    "no-log-init": { flag: "--no-log-init", deli:" ", value: false },
    // -m, --create-home create the user's home directory
    m: { flag: "-m", deli:" ", value: false },
    "create-home": { flag: "--create-home", deli:" ", value: false },
    // -M, --no-create-home          do not create the user's home directory
    M: { flag: "-M", deli:" ", value: false },
    "no-create-home": { flag: "--no-create-home", deli:" ", value: false },
    // -N, --no-user-group  do not create a group with the same name as the user
    N: { flag: "-N", deli:" ", value: false },
    "no-user-group": { flag: "--no-user-group", deli:" ", value: false },
    // -o, --non-unique  allow to create users with duplicate (non-unique) UID
    o: { flag: "-o", deli:" ", value: false },
    "non-unique": { flag: "--non-unique", deli:" ", value: false },
    // -p, --password PASSWORD       encrypted password of the new account
    p: { flag: "-p", deli:" ", value: true },
    password: { flag: "--password", deli:" ", value: true },
    // -r, --system  create a system account
    r: { flag: "-r", deli:" ", value: false },
    system: { flag: "--system", deli:" ", value: false },
    // -R, --root CHROOT_DIR         directory to chroot into
    R: { flag: "-R", deli:" ", value: true },
    root: { flag: "--root", deli:" ", value: true },
    // -s, --shell SHELL             login shell of the new account
    s: { flag: "-s", deli:" ", value: true },
    shell: { flag: "--shell", deli:" ", value: true },
    // -u, --uid UID                 user ID of the new account
    u: { flag: "-u", deli:" ", value: true },
    uid: { flag: "--uid", deli:" ", value: true },
    // -U, --user-group              create a group with the same name as the user
    U: { flag: "-U", deli:" ", value: false },
    "user-group": { flag: "--user-group", deli:" ", value: false },
    // -Z, --selinux-user SEUSER     use a specific SEUSER for the SELinux user mapping
    Z: { flag: "-Z", deli:" ", value: true },
    "selinux-user": { flag: "--selinux-user", deli:" ", value: true },
    // --extrausers              Use the extra users database
    extrausers: { flag: "--extrausers", deli:" ", value: false },
    ...BASE
};
export const ID = {
    ...BASE
}

export const USER_DEL = {
    ...BASE,
    // -f, --force force removal of files even if not owned by user
    f: { flag: "-f", deli:" ", value: false },
    force: { flag: "--force", deli:" ", value: false },
    // -h, --help display this help message and exit
    h: { flag: "-h", deli:" ", value: false },
    help: { flag: "--help", deli:" ", value: false },
    // -r, --remove remove home directory and mail spool
    r: { flag: "-r", deli:" ", value: false },
    remove: { flag: "--remove", deli:" ", value: false },
    // -R, --root CHROOT_DIR         directory to chroot into
    R: { flag: "-R", deli:" ", value: true },
    root: { flag: "--root", deli:" ", value: true },
    // -Z, --selinux-user remove any SELinux user mapping for the user
    Z: { flag: "-Z", deli:" ", value: false },
    "selinux-user": { flag: "--selinux-user", deli:" ", value: false },
};

export const PASSWORD = {
    // -a, --all report password status on all accounts
    a: { flag: "-a", deli:" ", value: false },
    all: { flag: "--all", deli:" ", value: false },
    // -d, --delete delete the password for the named account
    d: { flag: "-d", deli:" ", value: false },
    delete: { flag: "--delete", deli:" ", value: false },
    // -e, --expire force expire the password for the named account
    e: { flag: "-e", deli:" ", value: false },
    expire: { flag: "--expire", deli:" ", value: false },
    // -k, --keep-tokens change password only if expired
    k: { flag: "-k", deli:" ", value: false },
    "keep-tokens": { flag: "--keep-tokens", deli:" ", value: false },
    // -i, --inactive INACTIVE set password inactive after expiration to INACTIVE
    i: { flag: "-i", deli:" ", value: true },
    inactive: { flag: "--inactive", deli:" ", value: true },
    // -l, --lock   lock the password of the named account
    l: { flag: "-l", deli:" ", value: false },
    lock: { flag: "--lock", deli:" ", value: false },
    // -n, --mindays MIN_DAYS set minimum numb0er of days before password change to MIN_DAYS
    n: { flag: "-n", deli:" ", value: true },
    mindays: { flag: "--lock", deli:" ", value: true },
    // -q, --quiet                   quiet mode
    q: { flag: "-q", deli:" ", value: false },
    quiet: { flag: "--quiet", deli:" ", value: false },
    // -r, --repository REPOSITORY   change password in REPOSITORY repository
    r: { flag: "-r", deli:" ", value: true },
    repository: { flag: "--repository", deli:" ", value: true },
    // -R, --root CHROOT_DIR  directory to chroot into
    R: { flag: "-R", deli:" ", value: true },
    root: { flag: "--root", deli:" ", value: true },
    // -S, --status report password status on the named account
    S: { flag: "-S", deli:" ", value: false },
    status: { flag: "--status", deli:" ", value: false },
    // -u, --unlock unlock the password of the named account
    u: { flag: "-u", deli:" ", value: false },
    unlock: { flag: "--unlock", deli:" ", value: false },
    // -w, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS
    w: { flag: "-w", deli:" ", value: true },
    warndays: { flag: "--warndays", deli:" ", value: false },
    // -x, --maxdays MAX_DAYS set maximum number of days before password
    x: { flag: "-x", deli:" ", value: true },
    maxdays: { flag: "--maxdays", deli:" ", value: true },
    

}
export const Dictionory = {
   actions: {
    useradd: { flags: USER_ADD, key: 'useradd' },
    id: { flags: ID, key: 'id' }, 
    userdel: { flags: USER_DEL, key: 'userdel' }, 
    passwd: { flags: PASSWORD, key: 'passwd'}
   },
   list: () => Object.keys(Dictionory.actions),
   add: (key: string, data: any) => { (Dictionory.actions as any)[key] = data; },
   get: (key: string) => (Dictionory.actions as any)[key],
   remove: (key: string) => delete (Dictionory as any).actions[key]
}