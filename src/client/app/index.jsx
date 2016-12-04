var React = require('react');
var render = require('react-dom')

var App = React.createClass({
    render :function(){
        return <div>
            Hello world
        </div>
    },
})

render(<App/>, document.getElementById('app'));
