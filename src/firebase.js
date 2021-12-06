import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC0U0awwt90lkE4XUbjzuQydaV8Qtg_JqA",
  authDomain: "auth-development-7426b.firebaseapp.com",
  projectId: "auth-development-7426b",
  storageBucket: "auth-development-7426b.appspot.com",
  messagingSenderId: "899375956170",
  appId: "1:899375956170:web:49d3880f7aa0476ed33433",
});

export const auth = app.auth();
export default app;
