import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlHNsLbdH85thNyVywkTovYUYDYHvmRUM",
    authDomain: "cursosonline-4b11c.firebaseapp.com",
    databaseURL: "https://cursosonline-4b11c.firebaseio.com",
    projectId: "cursosonline-4b11c",
    //storageBucket: "",
    //messagingSenderId: "538613245347"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore()
  const settings = {timestampsInSnapshots: true};
  db.settings(settings);
  
  export default firebase

  //refs
  const usersRef = db.collection('users')

  //providers
  var fProvider = new firebase.auth.FacebookAuthProvider();
  var gProvider = new firebase.auth.GoogleAuthProvider();


//login
  export const facebookLogin = () => {
    return firebase.auth().signInWithPopup(fProvider)
        .then(result => {
            return findOrCreateUser(result.user)
        })
        .catch(e=>{
            console.log(e)
            return e
        })
  }

  export const googleLogin = () => {
    return firebase.auth().signInWithPopup(gProvider)
        .then(result => {
            return findOrCreateUser(result.user)
        })
        .catch(e=>{
            console.log(e)
            return e
        })
  }

  const findOrCreateUser = (data) => {
    return usersRef.doc(data.uid).get()
    .then(doc=>{
        if(!doc.exists) return createUser(data)
        else return setUser(doc.data())
    })
  }

  const createUser = (data) => {
    const user = {
        uid: data.uid,
        displayName: data.displayName,
        originalEmail: data.email,
        photoURL: data.photoURL
      }
    //console.log(user)
    usersRef.doc(data.uid).set(user)
    localStorage.setItem('user', JSON.stringify(data))
    return data
  }

  const setUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    return data
  }

  //signout
  export const logOut = () => {
    firebase.auth().signOut()
    localStorage.removeItem('user')
    window.location.reload()
  }

//update profile
export const updateUser = (data) => {
  return usersRef.doc(data.uid).update(data)
  .then(()=>{
    localStorage.setItem('user', JSON.stringify(data))
  })
  
}

