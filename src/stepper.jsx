
var React = require('react');
var classnames = require('classnames');
var controllable = require('react-controllables');

var Stepper = React.createClass({

  propTypes: {
    value: React.PropTypes.number,
    label: React.PropTypes.string,
    onValueChange: React.PropTypes.func,
    stepSize: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      label: '',
      value: 0,
      stepSize: 1,
    }
  },

  handleChange: function(e) {
    if (!this.props.onValueChange) return;
    var value = parseInt(e.target.value, 10);
    this.props.onValueChange(value);
  },

  handleDownClick: function() {
    if (!this.props.onValueChange) return;
    var value = this.props.value - this.props.stepSize;
    this.props.onValueChange(value);
  },

  handleUpClick: function() {
    if (!this.props.onValueChange) return;
    var value = this.props.value + this.props.stepSize;
    this.props.onValueChange(value);
  },

  render: function() {
    var styles = {
      input: {
        border: 0
      },
      button: {
        width: '3rem'
      }
    };
    return (
      <div className={this.props.className}>
        <label>{this.props.label}</label>
        <div className="flex flex-stretch border rounded xoverflow-hidden">
          <input type="number"
            value={this.props.value}
            onChange={this.handleChange}
            style={styles.input}
            className="flex-auto m0 field-light not-rounded" />
          <button
            style={styles.button}
            className="h2 bold button button-transparent border-left"
            onClick={this.handleDownClick}>-</button>
          <button
            style={styles.button}
            className="h2 bold button button-transparent border-left"
            onClick={this.handleUpClick}>+</button>
        </div>
      </div>
    )
  }

});

module.exports = controllable(Stepper, ['value']);

