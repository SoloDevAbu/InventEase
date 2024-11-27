const z = require("zod");
const { Warehouse, Manager } = require("../db");

const ManagerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
})

const CreateManager = async (req, res) => {
    const validation = ManagerSchema.safeParse(req.body);
    const warehouseId = req.params.warehouseId;

    if(!validation.success){
        res.status(403).json({
            msg: "Please enter valid input"
        })
    }
    const {name, email} = validation.data;
    try {
        const manager = await Manager.create({
            name,
            email,
            warehouseId
        })
        const warehouse = await Warehouse.findByIdAndUpdate(warehouseId, {
            manager: manager._id
        })
        res.json({
            msg: "Manager created successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const GetManager = async (req, res) => {
    const warehouseId = req.params.warehouseId;
    try {
        const warehouse = await Warehouse.findById(warehouseId);
        const manager = await Manager.findById(warehouse.manager)
        
        res.json({
            manager
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const UpdateManager = async (req, res) => {
    const {name, email} = req.body;
    const warehouseId = req.params.warehouseId;

    try {
        
    } catch (error) {
        
    }
}
const DeleteManager = async (req, res) => {

}

module.exports = {
    CreateManager,
    GetManager,
    UpdateManager,
    DeleteManager,
}