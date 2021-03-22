import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyC9TIMNwPK1yICgGBhFzh_2fnpc05rNzDQ",
	authDomain: "slack-clone-5e190.firebaseapp.com",
	projectId: "slack-clone-5e190",
	storageBucket: "slack-clone-5e190.appspot.com",
	messagingSenderId: "457693273184",
	appId: "1:457693273184:web:ea3743cf5a5a55608ff705",
	measurementId: "G-E2TGY4289V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
