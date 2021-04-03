var firebaseConfig = {
  apiKey: "AIzaSyC-m92c75-8rat6C861xCmbc6aPSOKgduY",
  authDomain: "testing-2a858.firebaseapp.com",
  projectId: "testing-2a858",
  storageBucket: "testing-2a858.appspot.com",
  messagingSenderId: "176536243427",
  appId: "1:176536243427:web:97a2d79fe4c9ef25a289d6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

db.collection("songs")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  });
