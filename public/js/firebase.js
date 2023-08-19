let firebaseConfig = {
    apiKey: "AIzaSyCVSpkCdDqZagChHSFw0Xq0JQnB0Vbfs60",
    authDomain: "blogging-website-9c2db.firebaseapp.com",
    projectId: "blogging-website-9c2db",
    storageBucket: "blogging-website-9c2db.appspot.com",
    messagingSenderId: "1058136298384",
    appId: "1:1058136298384:web:e8a2ac91bc154577c7d915"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();