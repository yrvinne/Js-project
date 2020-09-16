import Rebase from 're-base'
import firebase from "firebase";
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJXGrqgyD4ZXfTnMf3eHtyAMGZ-4Bv7go",
    authDomain: "chatbox-6422a.firebaseapp.com",
    databaseURL: "https://chatbox-6422a.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
