import { argv } from "node:process";
import readline from "node:readline";
import os from "os";

let usernameVar = "";
let operation = "";

const inint = () => {
  parseUsernameArgs();
  hiUser();
  cwdDisplay();
  process.chdir(homeDir());
  cwdDisplay();
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

if (process.platform === "win32") {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (input) => {
    switch (input) {
      case ".exit":
        byeUser();
        process.exit();
      case "zip":
        console.log("Oranges are $0.59 a pound.");
        break;
      default:
        console.log(`Sorry, we are not aware of of ${operation}.`);
    }
  });

  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

process.on("SIGINT", function () {
  //graceful shutdown
  byeUser();
  process.exit();
});

inint();
