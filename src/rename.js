import fs from "node:fs";
import path from "node:path";

export const renameFile = async (oldPath, newName) => {
  const newPath = path.resolve(path.dirname(oldPath), newName);
  console.log(newPath);
  fs.access(oldPath, (err) => {
    if (err) {
      console.log("File not found");
      console.log(err);
      console.error("FS operation failed");
    } else {
      fs.access(newPath, (err) => {
        if (!err) {
          console.log(err);
          console.error("FS operation failed");
        } else {
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              console.log(err);
              console.error("FS operation failed");
            } else {
              console.log("Files renamed!");
            }
          });
        }
      });
    }
  });
};
