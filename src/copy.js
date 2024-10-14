import fs from "node:fs";
import path from "node:path";

export const copyFile = async (oldPath, newPath) => {
  const fileName = path.basename(oldPath);
  const newFilePath = path.join(newPath, fileName);
  fs.access(oldPath, (err) => {
    if (err) {
      console.error("Old file not found");
    } else {
      fs.copyFile(oldPath, newFilePath, (err) => {
        console.log(oldPath);
        console.log(newFilePath);
        if (err) {
          console.error(err);
          console.error("FS operation failed");
        } else {
          console.log("Directory and files copied");
        }
      });
    }
  });
};
