import { Authillo } from "@authillo/backend-js";
const express = require("express");
const app = express();
const port = 3000;

Authillo.initialize({ clientId: "myClientId", clientSecret: "myClientSecret", jwtKey: "myJwtKey" });

app.get("/hello", (req: any, res: any) => {
	console.log("hello enpoint hit");
});
app.listen(port, () => {
	console.log(`express server started listening on ${port}`);
});
