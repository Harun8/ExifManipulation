# exifm - Image EXIF Data Manipulation and Rotation

exifm is an npm package that allows you to easily manipulate EXIF data of JPEG images, specifically focusing on rotating images based on user input to persist the orientation changes. This package ensures that your images are displayed correctly across different platforms by modifying their EXIF orientation metadata.

Not sure why you need this package. [Read my article about Exif manipulation](https://medium.com/@harunabdi8/mastering-exif-data-effortlessly-control-image-orientation-for-a-flawless-user-experience-d6c0dc42fa5c)

## Installation

To install the exifm package, use npm:

```bash

npm install exifm
```

Usage
Example
Below is an example of how to use the exifm package to rotate a JPEG image and persist the orientation change:

```javascript
const exifm = require("exifm");
const fs = require("fs");

// Read the image file into a buffer
const img = fs.readFileSync("./90R.jpg");
const outBuffer = Buffer.from(img);

// Function to rotate the image using exifm
const rotateImage = async (outBuffer, rn) => {
  return await exifm.callJpgRotation(outBuffer, rn);
};

(async () => {
  try {
    // Rotate the image by setting the desired rotation value (e.g., 8 for 90 degrees clockwise)
    let buffer = await rotateImage(outBuffer, 8);

    // Save the rotated image to a new file
    fs.writeFileSync("./tester.jpg", buffer);
  } catch (error) {
    console.error("Error rotating image:", error);
  }
})();
```

## Functionality

The exifm package provides the following functionality:

Image Rotation: Rotate JPEG images by modifying the EXIF orientation data, which ensures that the image will be displayed in the correct orientation across all platforms and applications.

EXIF Data Manipulation: Allows you to manipulate various EXIF tags, including the removal of sensitive information such as GPS data.

### Example Function: jpgRotation

This function handles the core functionality of rotating an image by modifying its EXIF data:

```javascript
const jpgRotation = async (ImageBuffer, rn) => {
  try {
    if (!Buffer.isBuffer(ImageBuffer)) {
      throw new Error("Input must be a Buffer.");
    }
    let data = ImageBuffer;
    let exif = {};
    let zeroth = {};
    let gps = {};

    gps[piexif.GPSIFD.GPSLatitude] = "1999:99:99 99:99:99";
    gps[piexif.GPSIFD.GPSLongitude] = "1999:99:99 99:99:99";

    zeroth[piexif.ImageIFD.Orientation] = rn;
    var exifObj = { "0th": zeroth, Exif: exif, GPS: gps };

    const exifbytes = piexif.dump(exifObj); // get exif data as a string
    const newJpeg = piexif.insert(exifbytes, ImageBuffer.toString("binary"));
    const newData = Buffer.from(newJpeg, "binary");

    return newData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { jpgRotation };
```

## Benefits

1. Persistent Changes: The EXIF orientation changes persist across all platforms and applications, unlike client-side CSS rotations which only last during the session.
2. Efficiency: Automates the process of correcting image orientation, saving time and reducing administrative overhead.
3. Compatibility: Most modern image viewers and software respect EXIF orientation data, ensuring consistent display.

## Error Handling

The exifm package includes basic error handling to ensure that the input is a valid Buffer and to manage potential issues during the EXIF manipulation process. Any encountered errors will be logged to the console.

## Further Resources

For more detailed information on EXIF data manipulation and the underlying library used (piexifjs), refer to the following resources:

1. [EXIF Data and Orientation Specification](https://sirv.com/help/articles/rotate-photos-to-be-upright/)
2. [Piexifjs Documentation](https://github.com/hMatoba/piexifjs)

License
This project is licensed under the MIT License. Feel free to contribute and improve upon the package!
