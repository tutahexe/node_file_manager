import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

export const decompressFile = async (oldPath, newPath) => {
  const brotliD = createBrotliDecompress();
  const source = createReadStream(oldPath);
  const destination = createWriteStream(newPath);
  pipeline(source, brotliD, destination, (err) => {
    if (err) {
      console.error("Operation failed:", err);
      process.exitCode = 1;
    } else {
      console.log(`File successfully decompressed. Can be found ${newPath}`);
    }
  });
};
