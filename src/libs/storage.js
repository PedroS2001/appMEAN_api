const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + '-' + Date.now() + '.png')
    }
})

const upload = multer({ storage })
module.exports = upload;