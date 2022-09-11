import db from "../config/db.js";
import {DataTypes} from "sequelize";

const Products = db.define(
	"products",
	{
		title: DataTypes.STRING,
		author: DataTypes.STRING
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

Products.sync({});

export default Products;
