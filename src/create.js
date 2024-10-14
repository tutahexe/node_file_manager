import fs from "node:fs";
import path from "node:path";
export const createFile = async () => {
  let filePath = path.join(process.cwd(), "empty.txt");
  let content = "";
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log(err);
      console.error("FS operation failed");
    } else {
      console.log(`File created at ${filePath}`);
    }
  });
};
