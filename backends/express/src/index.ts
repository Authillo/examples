const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req: any, res: any) => {
	console.log("hello enpoint hit");
});
app.listen(port, () => {
	console.log(`express server started listening on ${port}`);
});
