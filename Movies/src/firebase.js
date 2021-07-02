import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAf57D8vx2vSX-MYkZEtsREFaVbIi6JmPw",
  authDomain: "moviesearch-17b68.firebaseapp.com",
  projectId: "moviesearch-17b68",
  storageBucket: "moviesearch-17b68.appspot.com",
  messagingSenderId: "382757106131",
  appId: "1:382757106131:web:e9bd97099d063dc2f47f26",
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
