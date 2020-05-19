let firebaseConfig = {
    apiKey: "AIzaSyA1uPTHZVxfYVgE6zAG5BVCQFCe1Qmjatc",
    authDomain: "kavettam-test.firebaseapp.com",
    databaseURL: "https://kavettam-test.firebaseio.com",
    projectId: "kavettam-test",
    storageBucket: "kavettam-test.appspot.com",
    messagingSenderId: "189758885163",
    appId: "1:189758885163:web:a1d76e31bbf04e7a3a096e",
    measurementId: "G-E5QECTJZFM"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();
let functions = firebase.functions();
const fillform = document.getElementById("regform");
//Functions
function handleForm(event) { event.preventDefault(); } 
fillform.addEventListener('submit', handleForm);
function formSubmit() {
    let regEvent = fillform.selectEvent.value;
    let regTime = new Date().toLocaleString();
    let form = {
        name : fillform.name.value,
        email : fillform.email.value,
        branch : fillform.branch.value,
        semester : fillform.semester.value,
        ktuid : fillform.ktuid.value,
        phone : fillform.phone.value,
        event : regEvent,
        time : regTime
    };
    const submit = functions.httpsCallable('submitForm');
    submit(form)
    .then((result) => {
        console.log(result);
        if(result){
            redirectWithSession();
        }else{
            failedToSubmit();
        }});
}
function redirectWithSession() {    
    sessionStorage.setItem("registeredKTUID",fillform.ktuid.value);
    sessionStorage.setItem("registeredEVENT",fillform.selectEvent.value);
    successRegRedirect(true);
}
function successRegRedirect(stat) {
    if(stat) window.location.href = "./reg/successreg.html";
}
function failedToSubmit() {
    window.location.href = "./reg/oops.html";
}