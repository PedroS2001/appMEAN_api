const jwt = require('jsonwebtoken');



function verificarToken(req, res, next) {
    let token = req.get('Authorization');
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json(err);
        }
        req.usuario = decoded.usuario;
        next()
    })
}


module.exports = verificarToken;