
var button = document.querySelector('#container .button');
button.addEventListener('click', fullscreen);
// when you are in fullscreen, ESC and F11 may not be trigger by keydown listener. 
// so don't use it to detect exit fullscreen
document.addEventListener('keydown', function (e) {
  console.log('key press' + e.keyCode);
});
// detect enter or exit fullscreen mode
document.addEventListener('webkitfullscreenchange', fullscreenChange);
document.addEventListener('mozfullscreenchange', fullscreenChange);
document.addEventListener('fullscreenchange', fullscreenChange);
document.addEventListener('MSFullscreenChange', fullscreenChange);

function fullscreen() {
  // check if fullscreen mode is available
  if (document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled) {
    
    // which element will be fullscreen
    var iframe = document.querySelector('#container iframe');
    // Do fullscreen
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }
  else {
    document.querySelector('.error').innerHTML = 'Your browser is not supported';
  }
}

function fullscreenChange() {
  if (document.fullscreenEnabled ||
       document.webkitIsFullScreen || 
       document.mozFullScreen ||
       document.msFullscreenElement) {
    console.log('enter fullscreen');
  }
  else {
    console.log('exit fullscreen');
  }
  // force to reload iframe once to prevent the iframe source didn't care about trying to resize the window
  // comment this line and you will see
  var iframe = document.querySelector('iframe');
  iframe.src = iframe.src;
}

function btnShowHide() {
  var x = document.getElementById("Show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


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


  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-4912447307997749",
    enable_page_level_ads: true
  });


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131372284-1');


    firebase.auth().onAuthStateChanged(user => {
  if (user) {
    localStorage.setItem('myPage.expectSignIn', '1')
  } else {
    localStorage.removeItem('myPage.expectSignIn')
    // Implement logic to trigger the login dialog here or redirect to sign-in page.
    // e.g. showDialog()
  }
})
