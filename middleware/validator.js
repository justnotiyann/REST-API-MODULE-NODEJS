import validator from "express-validator";
const {body, validationResult} = require("express-validator");

import Users from "../models/Users.js";

// export const validatorEmail = async (req, res, next) => {
// 	body("email").isEmail();
// 	const getEmail = await Users.findOne({where: {email: req.body.email}});
// 	if (!getEmail) {
// 		res.json({msg: "Email sudah digunakan !"});
// 	} else {
// 		next();
// 	}
// };

export const checkEmail = (req, res, next) => {
	body("email")
		.isEmail()
		.withMessage({
			msg: "Harus berupa email"
		});
	next();
};
