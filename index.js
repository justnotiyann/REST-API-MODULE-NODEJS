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
app.use("/products", productsRoutes);

app.listen(3000);
