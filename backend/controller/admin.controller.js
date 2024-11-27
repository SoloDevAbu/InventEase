const zod = require("zod");
const {Admin} = require("../db")

const adminSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6),
})

const createAdmin = async (req, res) => {
    const validation = adminSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(403).json({
            msg: "Invalid user input"
        })
    }
    const { name, email, password } = validation.data;

    try {
        const admin = await Admin.create({
            name,
            email,
            password
        })
        res.json({
            msg: "Admin Created Successfully",
            admin
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

const updateAdmin = async (req, res) => {
    const {name, password} = req.body;
    const {email} = req.headers
    try {
        const admin = await Admin.findOneAndUpdate({
            email
        }, {
            name,
            password
        })
        res.json({
            msg: "Admin Updated successfully",
            admin
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    createAdmin,
    updateAdmin,
}