// GoogleSignIn.js

import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleSignIn = () => {
	let res: any = null;
	const handleSignInWithGoogle = async () => {
		try {
			const result = (res = await signInWithPopup(auth, googleProvider));
			const user = result.user;
			console.log(result);

			alert(`Signed in as ${user.displayName}`);
		} catch (error: any) {
			alert(error.message);
		}
	};

	return <>{res != null ? `Welcome ${res.user.displayName}` : <button onClick={handleSignInWithGoogle}>Sign in with Google</button>}</>;
};

export default GoogleSignIn;
