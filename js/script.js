

routes = {
'/': homePage,
  '/strike-force-heroes': portfolioPage,
  '/gun-mayhem': resumePage,
  '/rogue-soul-2': contactPage,
   '/run-3': contactPage,         
};


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8r2vrQaL3f4Jz1Et09RPvJts2xR_sBOg",
    authDomain: "login-to-games4u.firebaseapp.com",
    databaseURL: "https://login-to-games4u.firebaseio.com",
    projectId: "login-to-games4u",
    storageBucket: "login-to-games4u.appspot.com",
    messagingSenderId: "152743638512"
     firebase.initializeApp(config);
  };



function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          
      
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
          }
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          window.location.href = "https://ytbros.tk"
          
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }
    window.onload = function() {
      initApp();
    };
  