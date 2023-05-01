import { Authillo } from "@authillo/backend-js";
import * as bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;

let codeVerifier;

Authillo.initialize({ clientId: "myClientId", clientSecret: "myClientSecret", jwtKey: "myJwtKey" });

app.use((req, res, next): void => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});
app.use(bodyParser.json());
app.get("/hello", (req: any, res: any) => {
	console.log("hello enpoint hit");
});

/**
 * GENERATE CODE CHALLENGE STEP -
 * 1) Randomly generate a codeVerifier string
 * 2) Generate the codeChallenge by setting it equal to the hash of the codeVerifier using SHA256
 * 3) Store both using a persistent backend database
 * 4) Send the user the hashed version of the codeVerifier ( aka the codeChallenge)
 */
app.get("/codechallenge", (req, res) => {
	const codePair = Authillo.generateCodeChallengeAndCodeVerifierPair();
	console.log(codePair);
	/**
	 * WARNING - This is an example backend so we don't store these codes using a database & we instead save the values in the codeVerifier & codeChallenge variables respectively.
	 * In production, your backend would have to store the codeVerifier & codeChallenge in a presistent database
	 */
	codeVerifier = codePair.codeVerifier;
	res.json(`${codeVerifier}`);
});
app.listen(port, () => {
	console.log(`express server started listening on ${port}`);
});
