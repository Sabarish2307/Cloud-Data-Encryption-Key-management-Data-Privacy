import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPvH7G4fAXqA32lwocGCVqCsvzsmxfijU",
    authDomain: "eye-ae719.firebaseapp.com",
    projectId: "eye-ae719",
    storageBucket: "eye-ae719.appspot.com",
    messagingSenderId: "416292408573",
    appId: "1:416292408573:web:7f8acdb9c67c34b77bc294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    const Email = document.getElementById('Email').value;
    const Password = document.getElementById('Password').value;

    signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("logging...")
            windows.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

        });

})
