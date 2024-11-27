const { Router } = require("express");
const { createAdmin, updateAdmin } = require("../controller/admin.controller");
const AdminMiddleware = require("../middleware/admin.middleware");
const router = Router();

router.post("/signup", createAdmin);
router.put("/update",AdminMiddleware, updateAdmin);

module.exports = router;