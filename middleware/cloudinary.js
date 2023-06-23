const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const {
    YOUR_CLOUD_NAME,
    YOUR_API_KEY,
    YOUR_API_SECRET,

} = process.env;

cloudinary.config({
  cloud_name: YOUR_CLOUD_NAME,
  api_key: YOUR_API_KEY,
  api_secret: YOUR_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "agencymanager",
    format: async () => "png",
    public_id: (req, file) => {
      return file?.filename
    },
  },
});

const parser = multer({ storage: storage });

module.exports = parser;