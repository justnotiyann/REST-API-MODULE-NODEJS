import Users from "../models/Users.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
	const result = await Users.findAll({});
	if (!result) res.json(500);
	res.json({result: [result]});
};

export const addUser = async (req, res) => {
	const body = req.body;
	const hash = await argon2.hash(req.body.password);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}
	const result = await Users.create({...req.body, password: hash});
	if (!result) res.json("Gagal membuat data");
	res.json({msg: "Data berhasil dibuat", result: [result]});
};
