import db from "../config/db.js";
import {DataTypes} from "sequelize";

const Users = db.define(
	"users",
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{freezeTableName: true, timestamps: false}
);

Users.sync({});

export default Users;
