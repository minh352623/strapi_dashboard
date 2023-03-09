var multer = require("multer");

const storage = multer.diskStorage({
  destination: (ctx, file, cb) => {
    cb(null, "./server/uploads/");
  },
  filename: (ctx, file, cb) => {
    const ext = file.originalname.split(".");
    const newExt = ext[ext.length - 1];
    cb(null, `${Date.now()}.${newExt}`);
  },
});
module.exports = { upload: multer({ storage: storage }) };
