import {Sequelize} from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(
	process.env.DATABASE,
	process.env.USER_DATA,
	process.env.PASS,
	{
		host: process.env.HOST,
		dialect: process.env.DIALECT
	}
);

db.authenticate();

export default db;
