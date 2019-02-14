  /**
     * Function called when clicking the Login/Logout button.
     */

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8r2vrQaL3f4Jz1Et09RPvJts2xR_sBOg",
    authDomain: "login-to-games4u.firebaseapp.com",
    databaseURL: "https://login-to-games4u.firebaseio.com",
    projectId: "login-to-games4u",
    storageBucket: "login-to-games4u.appspot.com",
    messagingSenderId: "152743638512"
  };
  firebase.initializeApp(config);

  
      // [END getidptoken]
      // Listening for auth state changes.
      // [START authstatelistener]
function one()
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          window.location = "https://.ytbros.tk";
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
          document.getElementById('quickstart-account-details').textContent = 'null';
          document.getElementById('quickstart-oauthtoken').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    }
    window.onload = function() {
      one();
    };
