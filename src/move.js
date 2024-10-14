import fs from "node:fs";

export const moveFile = async (oldPath, newPath) => {
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
    console.log(`File successfully move to ${newPath}`);

    fs.unlink(oldPath, (err) => {
      if (err) {
        console.error(`Error deleting the file ${oldPath}:`, err);
      } else {
        console.log(`File ${oldPath} successfully deleted.`);
      }
    });
  });
};
