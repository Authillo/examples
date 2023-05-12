import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import { Authillo } from "@authillo/frontend-js";
Authillo.initialize({
	clientId: "myClientId",
	defaultRedirectUri: "http://localhost:3000/handleuserreturnsfromauthillo",
	enableLogs: true,
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
