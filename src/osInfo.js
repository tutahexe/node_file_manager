import os from "os";

export const osInfo = async (command) => {
  switch (command) {
    case "--EOL":
      console.log(os.EOL);
      break;
    case "--cpus":
      console.log(os.cpus());
      break;
    case "--homedir":
      console.log(os.homedir());
      break;
    case "--username":
      console.log(os.userInfo().username);
      break;
    case "--architecture":
      console.log(os.arch());
      break;
    default:
      console.log(`Sorry, we are not aware of of ${command}.`);
  }
};
