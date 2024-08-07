import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Function to hash password
function hashPassword(password) {
  return CryptoJS.SHA256(password).toString();
}

// Handle sign up
document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('Name').value;
  const email = document.getElementById('Email').value;
  const password = document.getElementById('Password').value;
  const hashedPassword = hashPassword(password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        Name: name,
        Email: email,
        Password: hashedPassword
      };
      return setDoc(doc(db, "users", user.uid), userData);
    })
    .then(() => {
      alert("Account created successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Handle sign in
document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  const hashedPassword = hashPassword(password);

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.Password === hashedPassword) {
          alert("Sign in successful!");
          window.location.href = "on.html";
        } else {
          alert("Invalid password.");
        }
      } else {
        alert("No such user found.");
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
