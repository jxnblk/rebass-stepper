
var React = require('react');

var Stepper = require('../stepper');

var Root = React.createClass({

  getInitialState: function() {
    return {
      hamburgers: 1
    }
  },

  handleValueChange: function(val) {
    this.setState({ hamburgers: val });
  },

  render: function() {
    return (
      <div className="p3">
        <h1>Rebass Stepper Demo</h1>
        <h2>Controlled Hamburgers: {this.state.hamburgers}</h2>
        <Stepper
          label="Hamburgers"
          value={this.state.hamburgers}
          onValueChange={this.handleValueChange}
          className="mb2"
          />
        <h2>Uncontrolled</h2>
        <Stepper
          label="Hamburgers"
          defaultValue={this.state.hamburgers}
          />
        <h2>Missing props</h2>
        <Stepper label="No Hamburgers" />
      </div>
    )
  }

});

module.exports = Root;

