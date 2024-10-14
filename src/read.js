import fs from "node:fs";

export const readFile = async (path) => {
  fs.access(path, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          console.log(data);
        }
      });
    }
  });
};
