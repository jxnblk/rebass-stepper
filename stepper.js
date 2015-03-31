
var React = require('react');
var classnames = require('classnames');
var controllable = require('react-controllables');

var Stepper = React.createClass({displayName: "Stepper",

  propTypes: {
    value: React.PropTypes.number,
    label: React.PropTypes.string,
    onValueChange: React.PropTypes.func,
    step: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    bar: React.PropTypes.bool,
    color: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      label: '',
      value: 0,
      step: 1,
      bar: false,
      color: 'blue'
    }
  },

  handleChange: function(e) {
    if (!this.props.onValueChange || this.props.readonly) return;
    var value = parseInt(e.target.value, 10);
    this.props.onValueChange(value);
  },

  handleDownClick: function() {
    if (!this.props.onValueChange || this.props.readonly) return;
    var value;
    if (typeof this.props.min != 'undefined' && this.props.value - this.props.step > this.props.min) {
      value = this.props.value - this.props.step;
    } else if (typeof this.props.min != 'undefined') {
      value = this.props.min;
    } else {
      value = this.props.value - this.props.step;
    }
    this.props.onValueChange(value);
  },

  handleUpClick: function() {
    if (!this.props.onValueChange || this.props.readonly) return;
    var value;
    if (typeof this.props.max != 'undefined' && this.props.value + this.props.step < this.props.max) {
      value = this.props.value + this.props.step;
    } else if (typeof this.props.max != 'undefined') {
      value = this.props.max;
    } else {
      value = this.props.value + this.props.step;
    }
    this.props.onValueChange(value);
  },

  render: function() {
    var barWidth = 0;
    if (this.props.bar) {
      var min = this.props.min || 0;
      var max = this.props.max || 1;
      barWidth = (this.props.value - min) / (max - min) * 100;
    }
    var styles = {
      wrapper: {
        position: 'relative',
        overflow: 'hidden',
      },
      bar: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: barWidth + '%',
        opacity: .25,
      },
      input: {
        border: 0,
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'transparent'
      },
      button: {
        width: '3rem'
      }
    };
    var bar = this.props.bar ? React.createElement("div", {style: styles.bar, className: 'bg-'+this.props.color}): false;
    return (
      React.createElement("div", {className: this.props.className}, 
        React.createElement("label", {htmlFor: this.props.name, className: "h5 bold"}, this.props.label), 
        React.createElement("div", {className: "flex flex-stretch border rounded"}, 
          React.createElement("div", {className: "flex-auto", style: styles.wrapper}, 
            bar, 
            React.createElement("input", {type: "number", 
              value: this.props.value, 
              onChange: this.handleChange, 
              style: styles.input, 
              min: this.props.min, 
              max: this.props.max, 
              step: this.props.step, 
              name: this.props.name, 
              disabled: this.props.disabled, 
              readOnly: this.props.readOnly, 
              required: this.props.required, 
              placeholder: this.props.placeholder, 
              className: "full-width m0 field-light rounded-left"})
          ), 
          React.createElement("button", {
            style: styles.button, 
            className: "h2 bold button button-transparent border-left", 
            disabled: this.props.disabled, 
            onClick: this.handleDownClick}, "-"), 
          React.createElement("button", {
            style: styles.button, 
            className: "h2 bold button button-transparent border-left", 
            disabled: this.props.disabled, 
            onClick: this.handleUpClick}, "+")
        )
      )
    )
  }

});

module.exports = controllable(Stepper, ['value']);

