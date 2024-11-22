const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getEntities);
router.post("/", controller.addEntity);
router.get("/:id", controller.getEntityByID);
router.delete("/:id", controller.delEntity);
router.put("/:id", controller.updateEntity);

module.exports = router;
