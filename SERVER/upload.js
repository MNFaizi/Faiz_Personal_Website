const multer = require('multer');

const diskStroage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/project')
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLocaleLowerCase().split(' ').join('_');
        cb(null, Date.now() + "-" + fileName)
    }
})

const upload = multer({
    storage: diskStroage,
    limits: {fileSize : 10000000}
})

module.exports = upload