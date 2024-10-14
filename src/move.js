import fs from "node:fs";
import path from "node:path";

export const moveFile = async (oldPath, newPath) => {
  const fileName = path.basename(oldPath);
  const newFilePath = path.join(newPath, fileName);
  fs.access(oldPath, (err) => {
    if (err) {
      console.log("File not found");
    } else {
      fs.rename(oldPath, newFilePath, (err) => {
        if (err) {
          console.log(err);
          console.error("FS operation failed");
        } else {
          console.log(`File moved to ${newFilePath}`);
        }
      });
    }
  });
};
