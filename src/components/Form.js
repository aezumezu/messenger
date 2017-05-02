import React from 'react';
import Toastr from 'toastr';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      number: '',
      message: ''
    };
    this.updateContent = this.updateContent.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
  }

  updateContent(e) {
    const id = e.target.id;
    const value = e.target.value;

    const state = this.state;
    state[id] = value;
    this.setState(state, () => {
      this.toggleButton();
    });
  }

  validateNumber(num) {
    if(num.match(/[^0-9]/g)) {
      Toastr.error('Invalid phone number');
      return false;
    }
    return true;
  }

  setNumber() {
    const number = this.state.number;

    if(this.validateNumber(number)) {
      this.props.generateNumbers(number);
    }
  }

  toggleButton() {
    const number = this.state.number;
    const message = this.state.message;

    if (number && message) {
      return this.setState({ disabled: false });
    }
    return this.setState({ disabled: true });
  }

  render() {
    return (
      <div style={{width: '45%', display: 'inline-block', marginRight: '30px'}}>
        <div className="form-group">
          <label id="number">Phone Number</label>
          <input id="number" type="text" className="form-control" onChange={this.updateContent} />
          <input type="button"
            className="btn btn-default space-top"
            value="Generate Numbers"
            onClick={this.setNumber}
            disabled={this.state.number ? false : true}
          />
        </div>
        <div className="form-group">
          <label id="message">Enter your message</label>
          <textarea id="message" className="form-control" cols="50" rows="15" onChange={this.updateContent} />
          <input type="button"
            className="btn btn-default space-top"
            value="Send Message"
            disabled={this.state.disabled} />
        </div>
      </div>
    );
  }
}

export default Form;