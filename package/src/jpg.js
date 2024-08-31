const piexif = require("piexifjs");
const fs = require("fs");

const jpgRotation = async (ImageBuffer, rn) => {
  try {
    if (!Buffer.isBuffer(ImageBuffer)) {
      throw new Error("Input must be a Buffer.");
    }
    let data = ImageBuffer;
    let exif = {};
    let zeroth = {};
    let gps = {};

    // zeroth[piexif.ImageIFD.Make] = "Make";
    // zeroth[piexif.ImageIFD.XResolution] = [777, 1];
    // zeroth[piexif.ImageIFD.YResolution] = [777, 1];
    // zeroth[piexif.ImageIFD.Software] = "Piexifjs";
    // exif[piexif.ExifIFD.DateTimeOriginal] = "2010:10:10 10:10:10";
    // exif[piexif.ExifIFD.LensMake] = "LensMake";
    // exif[piexif.ExifIFD.Sharpness] = 777;
    // exif[piexif.ExifIFD.LensSpecification] = [
    // [1, 1],
    // [1, 1],
    // [1, 1],
    // [1, 1],
    // ];
    // gps[piexif.GPSIFD.GPSVersionID] = [7, 7, 7, 7];
    // gps[piexif.GPSIFD.GPSDateStamp] = "1999:99:99 99:99:99";
    gps[piexif.GPSIFD.GPSLatitude] = "1999:99:99 99:99:99";
    gps[piexif.GPSIFD.GPSLongitude] = "1999:99:99 99:99:99";

    //   exif[piexif.ImageIFD.Orientation] = 0;

    zeroth[piexif.ImageIFD.Orientation] = rn;
    var exifObj = { "0th": zeroth, Exif: exif, GPS: gps };

    const exifbytes = piexif.dump(exifObj); // get exif data as a string
    const newJpeg = piexif.insert(exifbytes, ImageBuffer.toString("binary"));
    const newData = Buffer.from(newJpeg, "binary");

    return newData;
  } catch (error) {
    console.log(error);
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
