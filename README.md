
# rebass-stepper

React number stepper component

http://jxnblk.com/rebass-stepper

## Getting Started

```bash
npm install rebass-stepper
```

```jsx
<Stepper
  label="Hamburgers"
  value={this.state.hamburgers}
  onValueChange={this.handleValueChange} />
```

```css
/* Optional CSS to remove spinner button from number inputs */
input[type=number] { 
  -moz-appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
```

