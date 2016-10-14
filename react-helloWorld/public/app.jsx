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
  onButtonClick: function (e){
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if (typeof name === 'string' && name.length > 0){
      this.setState({
        name: name
      });
    }
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}!</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Christina';

ReactDOM.render(
  <Greeter name={firstName} message={'I am learning react'}/>,
  document.getElementById('app')
);
