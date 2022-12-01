// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const saveRecipeForuser = async (uid, recipe) => {
  try {
    const userQuery = query(collection(db, "users"), where("uid", "==", uid));
    const userDocs = await getDocs(userQuery);
    const user = userDocs.docs[0];
    const userRef = doc(db, "users", user.id);

    await updateDoc(userRef, { recipes: arrayUnion(recipe) });
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const getAllRecipesForUser = async (uid) => {
  // getFirestore().collection("users")
  // .where("uid", "==", uid)
  // .
  try {
    const userQuery = query(collection(db, "users"), where("uid", "==", uid));
    const userDocs = await getDocs(userQuery);
    const user = userDocs.docs[0].data();

    return user.recipes;
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      recipes: [],
    });
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserFromDB = async (uid) => {
  try {
    const userQuery = query(collection(db, "users"), where("uid", "==", uid));
    const doc = await getDocs(userQuery);
    const data = doc.docs[0].data();

    return data;
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const removeRecipeForUser = (user, recipe) => {};

export {
  auth,
  db,
  // signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  // sendPasswordReset,
  logout,
  getUserFromDB,
  saveRecipeForuser,
  getAllRecipesForUser,
  removeRecipeForUser,
};
