const express= require ("express");
const carritoController = require("../controllers/carritoController.js");
const router= express.Router();
const authMiddleware = require("../middelwares/authMiddleware");

router.get ("/", carritoController.list);
router.post("/add/:id", authMiddleware ,carritoController.add);
router.post("/order/add", authMiddleware ,carritoController.pedido);
//router.delete("/delete/:id" , carritoController.destroyItem);

module.exports = router;