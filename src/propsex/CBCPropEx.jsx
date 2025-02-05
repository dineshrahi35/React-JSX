import React, { Component } from 'react';

class CBCPropEx extends Component {
  render() {
    const { username, age, hobbies, address, sendFun } = this.props;

    return (
      <div>
        <h1>Username: {username}</h1>
        <h2>Age: {age}</h2>
        <h3>Hobbies:</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <h4>Address:</h4>
        <p>City: {address.city}, Area: {address.area}</p>
        <button onClick={sendFun}>Click Me</button>
      </div>
    );
  }
}

export default CBCPropEx;
