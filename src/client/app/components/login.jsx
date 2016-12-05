var React = require ('react')
var gapi = require ('./google').gapi
var GoogleLogin = require('react-google-login').default

var Login = React.createClass({
    getInitialState:function(){
    },
    componentDidMount:function(){
    },
	responseGoogle:function(e){
        var first_name = e.wc.Za;
        var last_name = e.wc.Na;
        var email = e.wc.hg;
        var image = e.wc.Ph;
        var id = e.wc.Ka;
        console.log(e)
        console.log(first_name,last_name,email,image,id)
        var vals = {
            first_name:first_name,
            last_name:last_name,
            email:email,
            }
        this.props.dispatch(actions.GoogleLogin(vals,(cb)=>{
            window.location = "list";
        }));
        this.setState({buttonText:"Logged In"})
    },
    render:function(){
		return <div>
		  <GoogleLogin
            cssClass=""
			clientId="223303475936-l40shoj0n5agpquhgc274g72fongd9i5.apps.googleusercontent.com"
			callback={this.responseGoogle} >
                <FontAwesome
                  name='google'
                />
                <span> {this.state.buttonText}</span>
            </GoogleLogin>
        </div>
    },
});


module.exports = Login;
