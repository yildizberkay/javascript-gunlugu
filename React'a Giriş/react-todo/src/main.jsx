// main.jsx

var InputBox = React.createClass({
  render: function() {
		return (
			<div>
				<input onKeyDown={this.props.callbackFunction} type="text" placeholder="Write something..." />
			</div>
		);
  }
});

var ListBoxItem = React.createClass({
	render: function(){
		return(
			<li>
				{this.props.text} 
			</li>
		)
	}
});

var ListBox = React.createClass({
	render: function(){
		var list = this.props.data.map(function(item, i){
			return (
				<ListBoxItem text={item} index={i} key={"Item"+i}/>
			)
		});

		return (
			<ul>
				{list}
			</ul>
		);
	}
});

var App = React.createClass({
	getInitialState: function(){
		return{
			items: []
		}
	},
	addItem: function(event){
		if(event.which === 13){
			this.setState({
				items: [...this.state.items, event.target.value]
			});
		}
	},
	render: function(){
		return(
			<div>
				<InputBox callbackFunction={this.addItem} />
				<ListBox data={this.state.items} />
			</div>
		)
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
