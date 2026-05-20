import express from "express";
import authenticate from "../middlewares/authenticate.js";
import validateBody from "../middlewares/validateBody.js";
import zodSchemas from "../zodSchemas/index.js";
import characterControllers from "../controllers/characterController/index.js";
const router = express.Router();
router.get("/me", authenticate, characterControllers.getUserCharacter);
router.post("/create", authenticate, validateBody(zodSchemas.createCharacter), characterControllers.createCharacter);
export default router;
//# sourceMappingURL=characterRouter.js.map