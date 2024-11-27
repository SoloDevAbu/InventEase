const {Router} = require("express");
const AdminMiddleware = require("../middleware/admin.middleware");
const { CreateWarehouse, GetWarehouse, UpdateWarehouse, DeleteWarehouse } = require("../controller/warehouse.controller");
const router = Router();

router.post('/', AdminMiddleware, CreateWarehouse);
router.get('/', AdminMiddleware, GetWarehouse);
router.put('/:id', AdminMiddleware, UpdateWarehouse);
router.delete('/:id', AdminMiddleware, DeleteWarehouse);

module.exports = router;