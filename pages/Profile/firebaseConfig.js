import {initializeApp} from 'firebase/app';

var config = {
    apiKey: "AIzaSyDAsD2B4pEdH8UMtf_p_pveCSPSJLA-Y7I",
    authDomain: "the2hourjob.firebaseapp.com",
    projectId: "the2hourjob",
    storageBucket: "the2hourjob.appspot.com",
    messagingSenderId: "961548394079",
    appId: "1:961548394079:web:8c1e916c1f9e8a665a85ea",
    measurementId: "${config.measurementId}"
}

const firebaseApp = initializeApp(config);
export { firebaseApp };