import { LogServiceA } from "../services/LogServiceA";
import { LogServiceB } from "../services/LogServiceB";

export enum Dependencies {
  LogServiceA = "LogServiceA",
  LogServiceB = "LogServiceB",
  LogServiceC = "LogServiceC",
}

export const DependenciesMapping = [
  { key: Dependencies.LogServiceA, value: LogServiceA },
  { key: Dependencies.LogServiceB, value: LogServiceB },
];
