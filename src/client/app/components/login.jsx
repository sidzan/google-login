var React = require ('react')
var gapi = require ('./google').gapi
var Login = React.createClass({
    onSuccess:function(e){
        console.log("success e:",e)
    },
    onFailure:function(e){
        console.log("failure");
    },
    componentDidMount:function(){
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '223303475936-4ok01gkgi5dddcdp88t0lb58gl6nh22u.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
    },
    render:function(){
        return <div>
            Login
        </div>
    },
});


module.exports = Login;
