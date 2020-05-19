var firebaseConfig = {
    apiKey: "AIzaSyA1uPTHZVxfYVgE6zAG5BVCQFCe1Qmjatc",
    authDomain: "kavettam-test.firebaseapp.com",
    databaseURL: "https://kavettam-test.firebaseio.com",
    projectId: "kavettam-test",
    storageBucket: "kavettam-test.appspot.com",
    messagingSenderId: "189758885163",
    appId: "1:189758885163:web:a1d76e31bbf04e7a3a096e",
    measurementId: "G-E5QECTJZFM"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let functions = firebase.functions();
let dat = {
    id : sessionStorage.getItem("registeredKTUID"),
    event : sessionStorage.getItem("registeredEVENT")
}
console.log(dat);
async function fetchDat(){
    const getDat = functions.httpsCallable('giveDat');
    let status = await getDat(dat)
    .then((result) =>{
        console.log(result);
    });
    console.log(status);
    }