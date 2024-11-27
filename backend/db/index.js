const mongoose = require("mongoose");
const AdminSchema = require("./models/Admin");
const ProductSchema = require("./models/Product");
const StaffSchema = require("./models/Staff");
const StockSchema = require("./models/Stock");
const SupplierSchema = require("./models/Supplier");
const WarehouseSchema = require("./models/Warehouse");
const ManagerSchema = require("./models/Manager");

const connectDB = async (dbURI) => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
};
connectDB("mongodb+srv://admin:0ighEra5PvSAGn5n@cluster0.gblax.mongodb.net/Inventory-Management");

const Admin = mongoose.model('Admin', AdminSchema);
const Manager = mongoose.model('Manager', ManagerSchema);
const Product = mongoose.model('Product', ProductSchema);
const Staff = mongoose.model('Staff', StaffSchema);
const Stock = mongoose.model('Stock', StockSchema);
const Supplier = mongoose.model('Supplier', SupplierSchema);
const Warehouse = mongoose.model('Warehouse', WarehouseSchema);

module.exports = {
    Admin,
    Manager,
    Product,
    Staff,
    Stock,
    Supplier,
    Warehouse,
}
