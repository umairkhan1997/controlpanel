import ActionTypes from '../constant/constant';
// import history from '../../History';
// import createBrowserHistory from 'history/createBrowserHistory'
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()
import history from '../../history';
// const hsitory = createBrowserHistory()
import * as firebase from 'firebase';

// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDSAg8nBl1CzoX1qBQka4dBPblrIHNFLtU",
  authDomain: "saylanimassitapp.firebaseapp.com",
  databaseURL: "https://saylanimassitapp.firebaseio.com",
  projectId: "saylanimassitapp",
  storageBucket: "saylanimassitapp.appspot.com",
  messagingSenderId: "207422233487"
};
firebase.initializeApp(config);



// export function submit(data) {
//   firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
//     .then(function (result) {
//       console.log(result)
//     })
//     .catch(function (error) {
//       console.log(error)
//     });
//   firebase.database().ref('/').child('Sing Up Email and PasswordSi').push(data);
//   return dispatch => dispatch({ type: "USERDATA", payload: data })

// }

export function signIn(user) {
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(function (result) {
      console.log(result)
      history.push('/next')

    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(error)
    });
  firebase.database().ref('/').child('Sing In Email and Password').push(user);
  return dispatch => dispatch({ type: 'SINGIN', payload: user })
  // history.push('/Usermain');




}

export function SignOut() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    history.push('/')
  }).catch(function (error) {
    // An error happened.
  });

  return dispatch => dispatch({ type: ActionTypes.SignOut })

}
export function addNotifi(notifi) {
  return dispatch => {
    console.log(firebase, "fire")
    console.log(notifi, "dhuhfkjds")
    firebase.storage().ref().child(`images/`).put(notifi.file).then((url) => {
      firebase.storage().ref().child(`images/${notifi.file}`).getDownloadURL().then(function (url) {
        console.log(url)
        notifi.uri = url
        console.log(notifi);
        firebase.database().ref('/').child("notification").push(notifi);
      })
    })
  }
}

export function getData(){
  return dispatch=>{
      firebase.database().ref('/').child('notification').once('value',snap=>{
        console.log('action data',snap.val());
          let fbData=snap.val()
          fbData.id=snap.key
          dispatch({type:'getData',payload:fbData})

      })
  }
}