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
let db = firebase.firestore();

/*
const collection = db.collection("Registrations");

let name = sessionStorage.getItem("registeredNAME");
let id = sessionStorage.getItem("registeredPID");

console.log(name);
console.log(id);

collection.doc("pid:" + id + " name:" + name)
.get()
.then(function(doc) {
    if(doc.exists) {
        d = doc.data();
        document.getElementById("name").innerHTML = "Name : " + d.name;
        document.getElementById("event").innerHTML = "Event : " + d.event;
        document.getElementById("ktuid").innerHTML = "KTU ID : " + d.ktuid;
    }
})
.catch(function(error) {
    console.log("oops" + error);
    
})


*/

function startthecounting() {
    let addNumber = functions.httpsCallable('addNumber');
addNumber({
    first : 20,
    second : 30
})
.then(function(result) {
    let sumObtained = result.data.sumOfTheTwoNumbers;
    console.log(sumObtained);
    
})
.catch(function(error) {
    console.log(error);
    
});
}