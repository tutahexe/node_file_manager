import fs from "node:fs";

export const lsDisplay = async () => {
  fs.access(process.cwd(), (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.readdir(process.cwd(), { withFileTypes: true }, (err, files) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          var result = [];
        }
        files.forEach((element) => {
          result.push(
            new Object({
              fileName: element.name,
              type: element.isFile() ? "File" : "Directory",
            })
          );
        });
        console.table(
          result.sort((a, b) => {
            if (a.type === "Directory" && b.type === "File") {
              return -1;
            }
            if (a.type === "File" && b.type === "Directory") {
              return 1;
            }
            return a.fileName.localeCompare(b.fileName);
          })
        );
      });
    }
  });
};
