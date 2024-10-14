import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";

export const decompressFile = async (oldPath, newPath) => {
  const resultFile = path.basename(oldPath).slice(0, -3);
  const destinFilePath = path.join(newPath, resultFile);
  const unzip = createGunzip();
  const source = createReadStream(oldPath);
  const destination = createWriteStream(destinFilePath);
  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error("Operation failed:", err);
      process.exitCode = 1;
    } else {
      console.log(`File successfully decompressed. Can be found ${newPath}`);
    }
  });
};
