import { Inject, Injectable } from "./decorators";
import { Dependencies } from "./manager/modules";
import { LogService } from "./services/LogServiceAbstract";

class InjectedServiceA {
  @Inject(Dependencies.LogServiceA)
  private logService: LogService;
  test() {
    this.logService.log("test");
  }
}

class InjectedServiceB {
  @Inject(Dependencies.LogServiceB)
  private logService: LogService;
  test() {
    this.logService.log("test");
  }
}

const aInstance = new InjectedServiceA();
aInstance.test();
const bInstance = new InjectedServiceB();
bInstance.test();

@Injectable(Dependencies.LogServiceC)
export class LogServiceC extends LogService {
  log(msg: string): void {
    console.log(`LogServiceC -> ${msg}`);
  }
}

class InjectedServiceC {
  @Inject(Dependencies.LogServiceC)
  private logService: LogService;
  test() {
    this.logService.log("test");
  }
}
const cInstance = new InjectedServiceC();
cInstance.test();
