
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYZB_I8HemKuOzCT4DpO18lik171c5I4U",
  authDomain: "store-f19a1.firebaseapp.com",
  projectId: "store-f19a1",
  storageBucket: "store-f19a1.appspot.com",
  messagingSenderId: "280922755565",
  appId: "1:280922755565:web:4e9e18034995454aa1d7e4",
  measurementId: "G-DZQ68N5LP4"
};

const app = initializeApp(firebaseConfig);

export const getFireBase= () =>{
  return app
}