 initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
              document.getElementById('sign-in-status').textContent = 'Signed in';
              document.getElementById('sign-in').textContent = 'Sign out';
              document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
               phoneNumber: phoneNumber,
                photoURL: photoURL,
               
              }, null, '  ');
             document.getElementById('photo').textContent = JSON.stringify({
                
               photoURL: photoURL,
               
              }, null, '  ');
            });
          } else {
            // User is signed out.
           
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
            
          }
        }, function(error) {
          console.log(error);
        });
      };
firebase.auth().getRedirectResult().then(function (result) {
        if (!user) {
          // User not logged in, start login.
          firebase.auth().signInWithRedirect(provider);
        } 
       
    }).catch(function (error) {
      // Handle Errors here.
      console.log(error)
      // ...
    });

      window.addEventListener('load', function() {
        initApp()
      });