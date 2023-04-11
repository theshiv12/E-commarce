const multer = require("multer");

// // Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (!file.originalname.match(/\.(png|jpg)$/)) {
//     return cb(new Error("Please upload a Image"));
//   }
//   cb(null, true);
// };

// //Configuration for Multer
// // const multerStorage = multer.diskStorage({
// //   destination: "public"
// // });

// exports.upload = multer({
//   storage: "public",
// //   fileFilter: multerFilter,
// });

const PATH = './public/data/uploads';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

exports.upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Allowed only .png, .jpg, .jpeg and .gif'));
        }
    }
});
