const { jpgRotation } = require("./src/jpg");

// const img = fs.readFileSync("./src/images/90R.jpg");
// const outBuffer = Buffer.from(img);

const callJpgRotation = async (imageBuffer, rn) => {
  let newBuffer = await jpgRotation(imageBuffer, rn);

  return newBuffer;
  //   fs.writeFileSync("./outR.jpg", newBuffer);
};

module.exports = {
  callJpgRotation,
};
// callRotation();

// path to image

// heicToJpgRotation(4);

// const getImageOrientation = () => {
//   try {
//     new Exif({ image: tester }, function (err, exifData) {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(exifData);
//       }
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// const getMetaData = () => {
//   exifr.orientation(plakat).then((output) => console.log("Camera:", output));
// };

// getImageOrientation();
// getMetaData();

// const getExifData = async () => {
//   const convertHeic2Jpg = await convert(heic, undefined, 0.7);
//   console.log("conversionOBJ", convertHeic2Jpg);
// };

// const newTry = async () => {
//   // const check = await convert(heic, "outputTest.jpg", 1);

//   const inBuffer = fs.readFileSync("./IMG_3485.heic");
//   console.log("inBuffer", inBuffer);

//   const outBuffer = await convert(inBuffer);

//   console.log("outbuffer", outBuffer);
// };

// newTry();

/* Orientation number meaning

1. = 0 degrees: the correct orientation, no adjustment is required.
2. = 0 degrees, mirrored: image has been flipped back-to-front.
3. = 180 degrees: image is upside down.
4. = 180 degrees, mirrored: image has been flipped back-to-front and is upside down.
5. = 90 degrees: image has been flipped back-to-front and is on its side.
6. = 90 degrees, mirrored: image is on its side.
7. = 270 degrees: image has been flipped back-to-front and is on its far side.
8. = 270 degrees, mirrored: image is on its far side.
*/

//  This package deleted exif data
// const heicConverter = require("heic-convert");

// const outputBuffer = await heicConverter({
//   buffer: file.buffer,
//   format: "JPEG",
//   quality: 0.7,
// });

// changed it to this to keep the exif data
// const convert = require("heic-jpg-exif");

// const outBuffer = await convert(file.buffer, undefined, 0.7);

// const buf = Buffer.from(outBuffer);

// console.log("buffer to json", buf.toJSON());
