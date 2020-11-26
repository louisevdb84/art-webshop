import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBogRNYOT9raoGfE5IeHRMhqdIak4xFgY8",
    authDomain: "art-app-4b950.firebaseapp.com",
    databaseURL: "https://art-app-4b950.firebaseio.com",
    projectId: "art-app-4b950",
    storageBucket: "art-app-4b950.appspot.com",
    messagingSenderId: "309433496963",
    appId: "1:309433496963:web:315e0670c7e798e41032b6",
    measurementId: "G-236FJLC73Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;