import { DependenciesMapping } from "./modules";

class DependencyManager {
  private deps: Record<string, any>;
  constructor() {
    this.deps = {};
    DependenciesMapping.forEach(({ key, value }) => {
      this.deps[key] = new value();
    });
  }

  get(key: string) {
    const matches = this.deps[key];
    if (!matches) throw new Error("No Matches Found");
    return matches;
  }

  set(key: string, dep: any) {
    console.log(key);
    this.deps[key] = dep;
  }
}

export default new DependencyManager();
