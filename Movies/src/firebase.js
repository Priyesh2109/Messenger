import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBn6WL-wqTwAsyI-oRPrKav75xr5_QMc5E",
  authDomain: "fir-build-62b0c.firebaseapp.com",
  projectId: "fir-build-62b0c",
  storageBucket: "fir-build-62b0c.appspot.com",
  messagingSenderId: "162758461427",
  appId: "1:162758461427:web:83d694aabff77ad87ab486",
}
let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
