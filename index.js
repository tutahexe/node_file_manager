import { argv } from "node:process";
import os from "os";

let usernameVar = "";

const inint = () => {
  parseUsernameArgs();
  hiUser();
  cwdDisplay();
  process.chdir(homeDir());
  cwdDisplay();
  byeUser();
};

const parseUsernameArgs = () => {
  for (let i = 0; i < argv.length; i += 2) {
    if (argv[i].startsWith("--username=")) {
      // process.env.username = argv[i].slice(11);
      usernameVar = argv[i].slice(11);
    }
  }
};

const homeDir = () => os.homedir();

const cwdDisplay = () => console.log(`You are currently in ${process.cwd()}`);

const hiUser = () =>
  console.log(`Welcome to the File Manager, ${usernameVar}!`);

const byeUser = () =>
  console.log(`Thank you for using File Manager, ${usernameVar}, goodbye!`);

inint();
