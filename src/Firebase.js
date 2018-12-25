import * as firebase from 'firebase';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyBlijgeooiRvuTcCTPMejEN0ZVs-D5-1L0",
    authDomain: "tsw-app-b0a20.firebaseapp.com",
    databaseURL: "https://tsw-app-b0a20.firebaseio.com",
    projectId: "tsw-app-b0a20",
    storageBucket: "tsw-app-b0a20.appspot.com",
    messagingSenderId: "583573108566"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;