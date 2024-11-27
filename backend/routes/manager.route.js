const {Router} = require("express");
const AdminMiddleware = require("../middleware/admin.middleware");
const { CreateManager, UpdateManager, DeleteManager, GetManager } = require("../controller/manager.controller");
const router = Router();

router.post('/:warehouseId', AdminMiddleware, CreateManager);
router.get('/:warehouseId', AdminMiddleware, GetManager);
router.put('/:warehouseId', AdminMiddleware, UpdateManager);
router.delete('/:warehouseId', AdminMiddleware, DeleteManager);

module.exports = router;