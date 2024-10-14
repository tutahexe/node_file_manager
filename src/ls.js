import fs from "node:fs";

export const lsDisplay = async () => {
  fs.access(process.cwd(), (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.readdir(process.cwd(), (err, files) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          console.log(files);
        }
      });
    }
  });
};
