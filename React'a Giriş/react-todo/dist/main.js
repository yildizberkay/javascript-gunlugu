// main.jsx

"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var InputBox = React.createClass({
	displayName: "InputBox",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement("input", { onKeyDown: this.props.callbackFunction, type: "text", placeholder: "Write something..." })
		);
	}
});

var ListBoxItem = React.createClass({
	displayName: "ListBoxItem",

	render: function render() {
		return React.createElement(
			"li",
			null,
			this.props.text
		);
	}
});

var ListBox = React.createClass({
	displayName: "ListBox",

	render: function render() {
		var list = this.props.data.map(function (item, i) {
			return React.createElement(ListBoxItem, { text: item, index: i, key: "Item" + i });
		});

		return React.createElement(
			"ul",
			null,
			list
		);
	}
});

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			items: []
		};
	},
	addItem: function addItem(event) {
		if (event.which === 13) {
			this.setState({
				items: [].concat(_toConsumableArray(this.state.items), [event.target.value])
			});
		}
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(InputBox, { callbackFunction: this.addItem }),
			React.createElement(ListBox, { data: this.state.items })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));