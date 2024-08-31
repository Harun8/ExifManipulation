const { jpgRotation } = require("./src/jpg");

// const img = fs.readFileSync("./src/images/90R.jpg");
// const outBuffer = Buffer.from(img);

const callJpgRotation = async (imageBuffer, rn) => {
  let newBuffer = await jpgRotation(imageBuffer, rn);

  return newBuffer;
};

module.exports = {
  callJpgRotation,
};
