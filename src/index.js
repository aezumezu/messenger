import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './mystyles.css';
import Preview from './components/Preview';
import Form from './components/Form';

class Messenger extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: []
    };
    this.generateNumbers = this.generateNumbers.bind(this);
  }

  generateNumbers(num) {
    let number = parseInt(num, 10);
    const numbers = [];
    let suffix = '';

    if (num.substr(0, 1) === '0') {
      suffix = '0';
      number = parseInt(num, 10)
    }

    for (let i = 0; i < 400; i++) {
      numbers.push(suffix + (number + i))
    }
    this.setState({ numbers }, );
  }

  render() {
    return (
      <div className="container-fluid">
        <Form generateNumbers={this.generateNumbers} />
        <Preview numbers={this.state.numbers} />
      </div>
    );
  }
};

ReactDOM.render(<Messenger />, document.getElementById('root'));