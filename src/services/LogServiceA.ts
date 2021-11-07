import { LogService } from "./LogServiceAbstract";

export class LogServiceA extends LogService {
  log(msg: string): void {
    console.log(`LogServiceA -> ${msg}`);
  }
}
