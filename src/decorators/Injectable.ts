import manager from "../manager";

export function Injectable(key: string): Function {
  return function (InjectableClass: { new () }) {
    manager.set(key, new InjectableClass());
  };
}
