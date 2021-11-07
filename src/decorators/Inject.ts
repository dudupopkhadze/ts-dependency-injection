import manager from "../manager";

export function Inject(key: string) {
  return function (classInstance: any, propertyName: string) {
    Object.defineProperty(classInstance, propertyName, {
      get: () => manager.get(key),
      enumerable: true,
      configurable: true,
    });
  };
}
