import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDlxPJIlohZS5PAKF9uB9cDo6emvBbT6bI',
  authDomain: 'image-gallery-408aa.firebaseapp.com',
  projectId: 'image-gallery-408aa',
  storageBucket: 'image-gallery-408aa.appspot.com',
  messagingSenderId: '329690443308',
  appId: '1:329690443308:web:4c3fc3ff60ed7fc3072b89',
}
firebase.initializeApp(firebaseConfig)

export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
