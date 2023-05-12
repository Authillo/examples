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
			<div>authorizationCode = {authorizationCode ?? ""}</div>
			<div>state = {state ?? ""}</div>
		</div>
	);
};
