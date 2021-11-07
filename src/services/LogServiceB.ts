import { LogService } from "./LogServiceAbstract";

export class LogServiceB extends LogService {
  log(msg: string): void {
    console.log(`LogServiceB -> ${msg}`);
  }
}
