import fs from "node:fs";

export const copyFile = async (oldPath, newPath) => {
  const readable = fs.createReadStream(oldPath);
  const writable = fs.createWriteStream(newPath);
  readable.pipe(writable);
  readable.on("error", (err) => {
    console.error("Error reading the file:", err);
  });

  writable.on("error", (err) => {
    console.error("Error writing the file:", err);
  });
  writable.on("finish", () => {
    console.log(`File successfully copied to ${newPath}`);
  });
};
