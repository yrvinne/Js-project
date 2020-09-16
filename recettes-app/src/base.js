import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCn8-R46njz5S__TE8iL4muxYZjm6vfpK0",
  authDomain: "recettes-app-42bd1.firebaseapp.com",
  databaseURL: "https://recettes-app-42bd1.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
