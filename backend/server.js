const express = require("express");
const app = express();
const AdminRoute = require("./routes/admin.route")
const WarehouseRoute = require("./routes/warehouse.route")
const ManagerRoute = require("./routes/manager.route")

app.use(express.json());

app.use("/admin", AdminRoute);
app.use('/warehouse', WarehouseRoute);
app.use('/manager', ManagerRoute);

app.listen(3000);