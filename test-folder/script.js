const exifm = require("exifm");
const fs = require("fs");
const img = fs.readFileSync("./90R.jpg");
const outBuffer = Buffer.from(img);

const rotateImage = async (outBuffer, rn) => {
  return await exifm.callJpgRotation(outBuffer, rn);
};

(async () => {
  try {
    // Change the number to see the image rotate
    let buffer = await rotateImage(outBuffer, 8);

    // Log the result
    fs.writeFileSync("./tester.jpg", buffer);
  } catch (error) {
    console.error("Error rotating image:", error);
  }
})();
