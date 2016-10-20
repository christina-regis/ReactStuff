
// props get passed into a component as you initialize it
// a component shouldn't update it's own props
// state is internally maintained and updated by the component
// a component can update its own state
//presentational component- do not have states
var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
    </div>
  );
  }
})

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    
    var name = this.refs.name.value;

    if(name.length > 0){
      this.refs.name.value ='';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"></input>
        <button>Set Nombre</button>
      </form>
    );
  }
})
//container component- have states
var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name: 'React',
      message: 'This is from a component'
    };
  },
  getInitialState: function (){
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name){
    this.setState({
      name: name
    });
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>

        <GreeterMessage name={name} message={message}/>

        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});
var firstName = 'Christina';
ReactDOM.render(
  <Greeter name={firstName} message={'This is the default message'}/>,
  document.getElementById('app')
);
