export const cd = (path) => {
  try {
    // Change the directory
    process.chdir(path);
  } catch (err) {
    // Printing error if occurs
    console.error("error occurred while " + "changing directory: " + err);
  }
};
