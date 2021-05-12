// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBtw7lXUCq32GhXe72m9orJSt_Pt4KW8a8',
  authDomain: 'kalaksanan--clone.firebaseapp.com',
  projectId: 'kalaksanan--clone',
  storageBucket: 'kalaksanan--clone.appspot.com',
  messagingSenderId: '597592467071',
  appId: '1:597592467071:web:6080c71511ac305ce2014a',
  measurementId: 'G-44VFB8YE2L',
})
