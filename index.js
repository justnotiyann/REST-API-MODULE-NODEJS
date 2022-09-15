import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000"
	})
);

app.use(express.urlencoded({extended: true}));

import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/Users.js";
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

app.listen(3000);
