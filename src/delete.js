import fs from "node:fs";
export const deleteFile = async (fileToRemove) => {
  fs.access(fileToRemove, (err) => {
    if (err) {
      console.log("File not available");
    } else {
      fs.rm(fileToRemove, (err) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          console.log("File was deleted");
        }
      });
    }
  });
};
