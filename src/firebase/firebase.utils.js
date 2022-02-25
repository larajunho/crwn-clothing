import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyBRD52BPjxncN4M_vH_iUpQWhfqgGknK-8",
	authDomain: "crwn-db-27521.firebaseapp.com",
	projectId: "crwn-db-27521",
	storageBucket: "crwn-db-27521.appspot.com",
	messagingSenderId: "876268674180",
	appId: "1:876268674180:web:2e548d22b274baf3deb6d1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
