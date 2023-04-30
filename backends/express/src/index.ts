// const express = require("express");
// const fetch = import("node-fetch");

// // import * as fetch from "node-fetch";
// import { authillo } from "@authillo/verify";

// // Set up the API endpoint URL
// const userId = "W1RU9Mv7pVSd13jCaIPWhQGnHzyWl6jmy6zRtbhs"; // Replace with the ID of the user you want to retrieve enrollments for
// const url = `https://camino.instructure.com/api/v1/users/${userId}/enrollments`;

// // Set up the API request headers
// const accessToken = "1788~vCmIimTi81YsltNOin9jt4sG7rgAqlJuogUnrlCw7oGxITj0ure3MRjK5DfyMk6t"; // Replace with your Canvas API access token
// const headers = {
// 	Authorization: `Bearer ${accessToken}`,
// };

// const app = express();
// const port = 3000;

// app.get("/camino", async (req, res) => {
// 	// Make the API request using fetch()
// 	const resy = await fetch(url, {
// 		method: "GET",
// 		headers: headers,
// 	})
// 		.then((response) => {
// 			if (response.ok) {
// 				return response.json();
// 			} else {
// 				throw new Error("Error retrieving enrollments");
// 			}
// 		})
// 		.then((data) => {
// 			// Do something with the enrollment data
// 			console.log(data);
// 		})
// 		.catch((error) => {
// 			// Handle any errors that occur during the API request
// 			console.error(error);
// 		});
// 	// const verificationStatus = await authilloClient.verify("+19145841378", ["face", "email"]);
// 	res.send(resy);
// 	// res.send(verificationStatus);
// });
// // define a route handler for the default home page
// // initialze your app
// const authilloClient = new authillo({
// 	clientId: "myApp's Client Id",
// 	clientSecret: " myApp's Client Secret",
// });
// app.get("/verify", async (req, res) => {
// 	const verificationStatus = await authilloClient.verify("+19145841378", ["face", "email"]);
// 	res.send(verificationStatus);
// });
// app.get("/info", async (req, res) => {
// 	const verifiedInfo = await authilloClient.getVerifiedInfo("+19145841378", ["face", "email"]);
// 	res.send(verifiedInfo);
// });
// // start the Express server
// app.listen(port, () => {
// 	console.log(`server started at http://localhost:${port}`);
// });
