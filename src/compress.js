import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";

export const compressFile = async (oldPath, newPath) => {
  const fileName = path.basename(oldPath) + ".gz";
  const newFilePath = path.join(newPath, fileName);
  console.log(newFilePath);
  const gzip = createGzip();
  const source = createReadStream(oldPath);
  const destination = createWriteStream(newFilePath);
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("Operation failed:", err);
      process.exitCode = 1;
    } else {
      console.log(`File successfully compressed. Can be found ${newFilePath}`);
    }
  });
};
