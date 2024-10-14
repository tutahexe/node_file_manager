import os from "node:os";
import path from "node:path";

export const up = () => {
  if (process.cwd() != os.homedir()) {
    process.chdir(path.dirname(process.cwd()));
  }
};
