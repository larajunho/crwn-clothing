import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	appId: process.env.REACT_APP_APP_ID,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

	projectId: "crwn-db-27521",
	authDomain: "crwn-db-27521.firebaseapp.com",
	storageBucket: "crwn-db-27521.appspot.com",
}
firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			})
		} catch (error) {
			console.log("error creating user", error.message)
		}
	}

	return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
