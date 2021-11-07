import { DependenciesMapping } from "./modules";

class DependencyManager {
  // structure for storing dependencies
  // [key]: ClassInstance
  private deps: Record<string, any>;
  constructor() {
    this.deps = {};
    // init predetermined class mappings
    DependenciesMapping.forEach(({ key, value }) => {
      this.set(key, new value());
    });
  }

  // return class instance for this key
  get(key: string) {
    const matches = this.deps[key];
    if (!matches) throw new Error("No Matches Found");
    return matches;
  }

  // store given class instance
  set(key: string, dep: any) {
    this.deps[key] = dep;
  }
}

// export single instance of the manager class
export default new DependencyManager();
