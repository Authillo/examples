import { createBrowserRouter } from "react-router-dom";
import { Authillo } from "@authillo/frontend-js";
import { HandleUserReturnsFromAuthillo } from "./HandleUserReturnsFromAuthillo";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/handleuserreturnsfromauthillo",
		element: <HandleUserReturnsFromAuthillo />,
	},
]);

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

export default router;
