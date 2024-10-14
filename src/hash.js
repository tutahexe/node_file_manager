import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");

export const calculateHash = async (__filePath) => {
  const hash = createHash("sha256");
  const input = createReadStream(__filePath);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};
