import { ISSHConfigs } from '../commander';

export abstract class Base {
  protected configs: ISSHConfigs;
  abstract create(opts: any): void;
  abstract update(): void;
  abstract remove(opts: any): void;
  abstract list(): void;
}
