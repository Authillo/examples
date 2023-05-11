import { Authillo } from "@authillo/frontend-js";

function App() {
	return (
		<div className="App">
			<button
				onClick={() => {
					Authillo.begin(["face"]);
				}}
			>
				Login or Verify With Authillo
			</button>
		</div>
	);
}

export default App;
