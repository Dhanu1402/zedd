import React, { Component } from 'react';

class classExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="h-screen bg-[#ED806E]">
        <h1 className="absolute left-10 top-6 md:text-4xl text-xl text-white font-semibold font-mono">
          Question 1
        </h1>
        <div className="md:h-full h-[50%] space-y-6 flex flex-col justify-center items-center">
          <div className="text-xl font-semibold font-mono text-center space-y-4">
            <h1 className="text-white">This is from Class Component.</h1>
            <p className="text-[#800080]">
              Use of Class State in Class Component
            </p>
          </div>
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="Enter text here"
            onChange={this.handleChange}
            className="rounded-sm border-2 border-black p-2 outline-none"
          />
          <div className="text-2l font-semibold font-mono text-center text-white space-y-4">
            {this.state.inputValue}
          </div>
        </div>
      </div>
    );
  }
}

export default classExample;
