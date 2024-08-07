<!-- Firebase SDKs -->
<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.4/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"></script>

<script>
 // Firebase configuration
 const firebaseConfig = {
apiKey: "AIzaSyCPvH7G4fAXqA32lwocGCVqCsvzsmxfijU",
authDomain: "eye-ae719.firebaseapp.com",
projectId: "eye-ae719",
storageBucket: "eye-ae719.appspot.com",
messagingSenderId: "416292408573",
appId: "1:416292408573:web:7f8acdb9c67c34b77bc294"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();
 const firestore = firebase.firestore();

 // Get references to the upload button and file input
 const uploadButton = document.getElementById('uploadButton');
 const fileInput = document.getElementById('fileInput');

 uploadButton.addEventListener('click', () => {
     fileInput.click();
 });

 fileInput.addEventListener('change', () => {
     const file = fileInput.files[0];
     if (file) {
         // Create a storage reference
         const storageRef = storage.ref('uploads/' + file.name);

         // Upload the file
         const uploadTask = storageRef.put(file);

         // Monitor the progress of the upload
         uploadTask.on('state_changed', (snapshot) => {
             // Progress update
             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             console.log('Upload is ' + progress + '% done');
         }, (error) => {
             // Handle unsuccessful uploads
             console.error('Upload failed:', error);
             alert(`Upload failed: ${error.message}`);
         }, () => {
             // Handle successful uploads on complete
             uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                 console.log('File available at', downloadURL);
                 alert('File uploaded successfully!');
             });
         });
     }
 });
 uploadTask.on('state_changed', 
(snapshot) => {
 // Progress update
 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
 console.log('Upload is ' + progress + '% done');
}, 
(error) => {
 // Handle unsuccessful uploads
 console.error('Upload failed:', error);
 alert(`Error: ${error.message}`);
}, 
() => {
 // Handle successful uploads on complete
 uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
   console.log('File available at', downloadURL);
   alert('File uploaded successfully!');
 });
}
);

</script>
