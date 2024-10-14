import os from "node:os";

export const up = () => {
  if (process.cwd() != os.homedir()) {
    process.chdir(path.dirname(process.cwd()));
  }
};
