import * as bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;
app.use((req, res, next): void => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});
app.use(bodyParser.json());
app.listen(port, () => {
	console.log(`express server started listening on ${port}`);
});

// ^^^^^^ EVERYTHING ABOVE THIS LINE IS BOILERPLATE EXPRESS CODE ^^^^^^^

// vvvvvvv AUTHILLO SPECIFIC CODE BELOW vvvvvvv
import { Authillo } from "@authillo/backend-js";
Authillo.initialize({ clientId: "myClientId", clientSecret: "myClientSecret", jwtKey: "myJwtKey" });
let codeVerifierStoredInMockDatabase: string;

// GENERATE CODE CHALLENGE STEP
app.get("/codechallenge", (req, res) => {
	const { codeVerifier, codeChallenge } = Authillo.generateCodeChallengeAndCodeVerifierPair();
	codeVerifierStoredInMockDatabase = codeVerifier;
	res.json(`${codeChallenge}`);
});

// TOKEN REQUEST & USER INFO STEP
app.get("/codeResponse", async (req, res) => {
	const code = req.query.code as string;
	const tokenResponse = await Authillo.tokenRequest(code, "", codeVerifierStoredInMockDatabase);
	if (tokenResponse.result.succeeded) {
		const userInfo = await Authillo.getUserInfo(tokenResponse.result.feedback.access_token);
		console.log("retrieved the following info about the user", JSON.stringify(userInfo));
	}
	res.json(JSON.stringify(tokenResponse));
});
