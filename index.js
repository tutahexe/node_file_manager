import { argv } from "node:process";
import readline from "node:readline";
import os from "os";
import path from "path";
import { up } from "./src/up.js";
import { cd } from "./src/cd.js";

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
    } else {
      usernameVar = "Anonymous User";
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
    const args = input.split(" ");
    switch (args[0]) {
      case ".exit":
        byeUser();
        process.exit();
      case "up":
        up();
        cwdDisplay();
        break;
      case "cd":
        cd(args[1]);
        cwdDisplay();
        break;
      case "zip":
        console.log("Archivating everything." + args[1]);
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
