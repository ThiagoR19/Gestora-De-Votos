window.fbAsyncInit = function() {
  FB.init({
    appId      : '791915376863309',
    cookie     : true,
    xfbml      : true,
    version    : 'v23.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function onLogin(){
  FB.login(function(response){
    if(response.authResponse){
      console.log('Bienvenido!  Fetching your information.... ');
      FB.api('/me', function(response){
        console.log(response)
        console.log('Good to see you, ' + response.name + '.');
      });
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  });
}