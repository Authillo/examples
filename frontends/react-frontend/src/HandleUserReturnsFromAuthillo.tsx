import { useEffect, useState } from "react";
import { Authillo } from "@authillo/frontend-js";

export const HandleUserReturnsFromAuthillo = () => {
	const [authorizationCode, setAuthorizationCode] = useState<string | null>(null);
	const [state, setState] = useState<string | null>(null);
	useEffect(() => {
		const resultFromAuthorizeStep = Authillo.parseResultsFromQueryString();
		setAuthorizationCode(resultFromAuthorizeStep.code);
		setState(resultFromAuthorizeStep.state);
	}, []);

	return (
		<div>
			<div>User has returned from authillo </div>
			<div>user's authorizationCode = {authorizationCode ?? ""}</div>
			<div>user's state = {state ?? ""}</div>
			<div>
				<button
					disabled={authorizationCode == null}
					onClick={() => {
						// Here, you would send the authorizationCode and state values to you backend, then your backend would perform the tokenRequest and return the user's idtoken to the frontend
					}}
				>
					Get Tokens
				</button>
			</div>
		</div>
	);
};
