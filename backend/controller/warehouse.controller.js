const z = require("zod");
const { Warehouse } = require("../db");

const WarehouseSchema = z.object({
    name: z.string(),
    location: z.string(),
})

const CreateWarehouse = async (req, res) => {
    const validation = WarehouseSchema.safeParse(req.body);
    if(!validation.success){
        return res.status(403).json({
            msg: "Enter valid inputs"
        })
    }

    const {name, location} = validation.data;

    try {
        const warehouse = await Warehouse.create({
            name,
            location
        })
        res.json({
            msg: "Warehouse created",
            warehouse
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const GetWarehouse = async (req, res) => {
    try {
        const warehouse = await Warehouse.find({})
        res.json({
            warehouse
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const UpdateWarehouse = async (req, res) => {
    const {id} = req.params;
    const {name, location} = req.body;

    try {
        const warehouse = await Warehouse.findByIdAndUpdate(id, {
            name,
            location
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const DeleteWarehouse = async (req, res) => {
    const {id} = req.params;

    try {
        const warehouse = await Warehouse.findByIdAndDelete(id);
        res.json({
            msg: "Warehouse deleted",
            warehouse
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    CreateWarehouse,
    GetWarehouse,
    UpdateWarehouse,
    DeleteWarehouse,
}