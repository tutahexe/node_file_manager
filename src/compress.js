import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";

export const compressFile = async (oldPath, newPath) => {
  const brotli = createBrotliCompress();
  const source = createReadStream(oldPath);
  const destination = createWriteStream(newPath);
  pipeline(source, brotli, destination, (err) => {
    if (err) {
      console.error("Operation failed:", err);
      process.exitCode = 1;
    } else {
      console.log(`File successfully compressed. Can be found ${newPath}`);
    }
  });
};
