/* eslint-disable react/display-name */
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import initFirebase from "../config.js";

initFirebase();
const auth = firebase.auth();

const withAuth = (Component) => (props) => {
  // If user Not signed in redirect him to another page (use this if needed)
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (!authUser) {
  //       router.push({
  //         pathname: "/",
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default withAuth;
