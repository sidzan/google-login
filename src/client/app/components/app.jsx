var React = require ('react')
var Login = require ('./login')
var App = React.createClass({
    render:function(){
        return <div>
            Apps
           <Login/>
        </div>
    },
});


module.exports = App;
