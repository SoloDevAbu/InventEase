const { Admin } = require("../db");

const AdminMiddleware = async (req, res, next) => {
    const {email, password} = req.headers;

    try {
        const admin = await Admin.findOne({
            email,
            password
        })

        if(!admin){
            res.status(400).json({
                msg: "Admin not found"
            })
        } else {
            next()
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = AdminMiddleware;