import express from "express";
const router = express.Router();
import * as Users from "../controllers/Users.js";
import * as Validator from "../middleware/validator.js";

router.get("/", Users.getUsers);
router.post("/add", Validator.checkEmail, Users.addUser);

export default router;
