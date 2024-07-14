const firebaseConfig = {
    apiKey: "AIzaSyAJ2CLMjxsiVmMRnfU9gcr2xtCoLtv1t5Y",
    authDomain: "innerbalance-f3b30.web.app",
    projectId: "innerbalance-f3b30",
    storageBucket: "innerbalance-f3b30.appspot.com",
    messagingSenderId: "147446913738",
    appId: "1:147446913738:android:2b0ee501e73bd54705b233"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  const deleteButton = document.getElementById('delete-button');

  deleteButton.addEventListener('click', handleDeleteAccount);

function handleDeleteAccount(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get email and password from form fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Authenticate the user with email and password (assuming password authentication)
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // User successfully authenticated, proceed with deletion
        deleteUserAccount();
      })
      .catch(error => {
        // Handle authentication errors (e.g., invalid credentials)
        console.error("Error authenticating user:", error);
        // Display error message to user
      });
  }

  function deleteUserAccount() {
    const user = auth.currentUser;
  
    user.delete()
      .then(() => {
        console.log("User account deleted successfully.");
        // Redirect user to confirmation page
        window.location.href = "./account-deleted.html";
      })
      .catch(error => {
        // Handle deletion errors
        console.error("Error deleting user account:", error);
        // Display error message to user
      });
  }

  const resetButton = document.getElementById('cancel-button');

  resetButton.addEventListener('click', handleReset);
  
  function handleReset() {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
  
    emailField.value = '';
    passwordField.value = '';
  }
  
  