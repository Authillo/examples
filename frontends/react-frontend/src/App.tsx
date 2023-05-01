import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Authillo } from "@authillo/frontend-js";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<button
					onClick={() => {
						Authillo.begin(["face"]);
					}}
				>
					Login With Authillo
				</button>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
