import multer from 'multer';

import { isValidFormat } from '../regex';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "public")
    },
    filename(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname + "_")
    },
})

const fileFormat = (mimetype: string, cb: any) => {

    if(isValidFormat.test(mimetype)) {
        cb(null, true)
    } else {
        cb(null, "Format is not valid")
    }


}

export const upload = multer({
    storage,
    limits: {
        fileSize: 1000 * 1000
    },
    fileFilter(req, file, cb) {
        fileFormat(file.mimetype, cb)
    },
})