import Products from "../models/Products.js";

export const getProduct = async (req, res) => {
	const result = await Products.findAll({});
	if (result <= 0) res.json("Data belum ada ");
	res.json({responses: [result]});
};

export const addProduct = async (req, res) => {
	const body = req.body;
	const responses = await Products.create({...req.body});
	if (!responses) res.json("Gagal tambah data");
	res.json({msf: [responses]});
};

export const deleteProduct = async (req, res) => {
	const id = req.params.id;
	const responses = await Products.destroy({where: {id: id}});
	if (!responses) res.json("Gagal hapus data");
	res.json("berhasil hapus data");
};

export const editProduct = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	const responses = await Products.update({...req.body}, {where: {id: id}});
	if (!responses) res.json("Gagal edit data");
	res.json("Berhasil edit data");
};
