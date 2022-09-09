// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./sign-in.styles.scss";

import {
  auth,
  createUserDocmentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //signInWithGoogleRedirect
  //     useEffect(() => {
  //     async function fetchData() {
  //       const response = await getRedirectResult(auth);
  //       console.log(response);
  //       if (response) {
  //         const userDocRef = await createUserDocmentFromAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);
  // If Firebase: Error (auth/web-storage-unsupported) Error, Check the browser allows the cookies

  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //   }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
