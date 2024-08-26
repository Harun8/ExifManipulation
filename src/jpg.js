const fs = require("fs");
const piexif = require("piexifjs");
const img = fs.readFileSync("./src/images/90R.jpg");
const convert = require("heic-jpg-exif");

const jpgRotation = async (rn) => {
  // const outBuffer = await convert(heic, undefined, 0.7);

  const outBuffer = Buffer.from(img);

  console.log("outputBuffer", outBuffer);
  let data = outBuffer;
  console.log("data", typeof data);
  let exif = {};
  let zeroth = {};
  let gps = {};

  zeroth[piexif.ImageIFD.Make] = "Make";
  zeroth[piexif.ImageIFD.XResolution] = [777, 1];
  zeroth[piexif.ImageIFD.YResolution] = [777, 1];
  zeroth[piexif.ImageIFD.Software] = "Piexifjs";
  exif[piexif.ExifIFD.DateTimeOriginal] = "2010:10:10 10:10:10";
  exif[piexif.ExifIFD.LensMake] = "LensMake";
  exif[piexif.ExifIFD.Sharpness] = 777;
  exif[piexif.ExifIFD.LensSpecification] = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ];
  gps[piexif.GPSIFD.GPSVersionID] = [7, 7, 7, 7];
  gps[piexif.GPSIFD.GPSDateStamp] = "1999:99:99 99:99:99";
  //   exif[piexif.ImageIFD.Orientation] = 0;

  zeroth[piexif.ImageIFD.Orientation] = rn;
  var exifObj = { "0th": zeroth, Exif: exif, GPS: gps };

  const exifbytes = piexif.dump(exifObj);
  const newJpeg = piexif.insert(exifbytes, outBuffer.toString("binary"));
  const newData = Buffer.from(newJpeg, "binary");

  console.log("newData", newData);

  try {
    fs.writeFileSync("./outR.jpg", newData);
  } catch (error) {
    console.error("2", error);
  }

  // var exifObj = { "0th": zeroth, Exif: exif, GPS: gps };

  // console.log("exifOBJ", exifObj);

  // var exifBytes = piexif.dump(exifObj);
  // console.log("exifBytes", exifBytes);
  // let insertExifBytes = piexif.insert(exifBytes, data);
  // console.log("insertExifBytes", insertExifBytes);
  // let newJpeg = Buffer.from(insertExifBytes, "binary");

  // fileObj = {
  //   originalname: file.originalname,
  //   buffer: newJpeg,
  // };
};

module.exports = { jpgRotation };
