var App = React.createClass({
	getInitialState: function(){
		return{
			counter: 0
		}
	},
	increaseCounter: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	render: function(){
		return(
			<div>
            	{this.props.helloWorldString}
                <button onClick={this.increaseCounter}>Add +1</button><br />
				Counter: {this.state.counter}
			</div>
		)
	}
});

ReactDOM.render(
	<App helloWorldString="Hello World! This is first component." />,
	document.getElementById('content')
);