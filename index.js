import { argv } from "node:process";
import readline from "node:readline";
import os from "os";
import path from "path";
import { up } from "./src/up.js";
import { cd } from "./src/cd.js";
import { lsDisplay } from "./src/ls.js";
import { createFile } from "./src/create.js";
import { readFile } from "./src/read.js";
import { renameFile } from "./src/rename.js";
import { copyFile } from "./src/copy.js";
import { moveFile } from "./src/move.js";
import { deleteFile } from "./src/delete.js";
import { compressFile } from "./src/compress.js";
import { decompressFile } from "./src/decompress.js";

let usernameVar = "";
let operation = "";
const programDir = process.cwd();

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
        break;
      case "cd":
        cd(args[1]);
        break;
      case "ls":
        lsDisplay();
        cwdDisplay();
        break;
      case "cat":
        readFile(args[1]);
        break;
      case "add":
        createFile();
        break;
      case "rn":
        renameFile(args[1], args[2]);
        break;
      case "cp":
        copyFile(args[1], args[2]);
        break;
      case "mv":
        moveFile(args[1], args[2]);
        break;
      case "rm":
        deleteFile(args[1]);
        break;
      case "compress":
        compressFile(args[1], args[2]);
        break;
      case "decompress":
        decompressFile(args[1], args[2]);
        break;
      default:
        console.log(`Sorry, we are not aware of of ${operation}.`);
    }

    cwdDisplay();
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
