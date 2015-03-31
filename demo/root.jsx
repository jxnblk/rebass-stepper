
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
          name="hamburgers"
          label="Hamburgers"
          value={this.state.hamburgers}
          onValueChange={this.handleValueChange}
          className="mb2"
          />
        <Stepper
          name="hamburgers-step-10"
          label="Hamburgers (step: 10)"
          value={this.state.hamburgers}
          step={10}
          onValueChange={this.handleValueChange}
          className="mb2"
          />
        <Stepper
          name="hamburgers-disabled"
          label="Disabled"
          value={this.state.hamburgers}
          className="mb2"
          disabled
          />
        <Stepper
          name="hamburgers-readonly"
          label="Readonly"
          value={this.state.hamburgers}
          className="mb2"
          readonly
          />
        <Stepper
          name="hamburgers-min-max"
          label="Min 0 / Max 3"
          onValueChange={this.handleValueChange}
          min={0}
          max={3}
          value={this.state.hamburgers}
          className="mb2" />
        <Stepper
          name="hamburgers-bar"
          label="Bar"
          onValueChange={this.handleValueChange}
          min={0}
          max={10}
          bar
          value={this.state.hamburgers}
          className="mb2" />
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

