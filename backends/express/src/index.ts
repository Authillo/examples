const express = require("express");
import * as fetch from "node-fetch";
import * as bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(
	(
		req: any,
		res: { setHeader: (arg0: string, arg1: string | boolean) => void },
		next: () => void
	) => {
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
		res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
		res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
		res.setHeader("Access-Control-Allow-Credentials", true);
		next();
	}
);

app.use(bodyParser.json());

app.get("/hello", (req: any, res: any) => {
	console.log("hello enpoint hit");
});
