"use strict";

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			counter: 0
		};
	},
	increaseCounter: function increaseCounter() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			this.props.helloWorldString,
			React.createElement(
				"button",
				{ onClick: this.increaseCounter },
				"Add +1"
			),
			React.createElement("br", null),
			"Counter: ",
			this.state.counter
		);
	}
});

ReactDOM.render(React.createElement(App, { helloWorldString: "Hello World! This is first component." }), document.getElementById('content'));