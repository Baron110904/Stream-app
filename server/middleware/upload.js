import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "cover"){
            cb(null, "uploads/covers");
        } else if (file.fieldname === "audio"){
            cb(null, "uploads/audios");
        } else {
            cb(new Error("Invalid field name"), null);
        }
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    },
});


const upload = multer({ storage });

export default upload;