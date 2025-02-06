// import React from 'react'

// const CBCStateEX extends Component{
//     constructor(){
//         super();
//         this.state={
//             users:["vamshi","579","vaishali","Jannnu","Jana"],
//             num:100
//         };
//     }
//     changeNumber=()=>{
//         this.setState({num:200})
//     }
//     render() {
//         console.log(this.state);
//   return (
//     <div>
//       {
//         this.state.users.map((user , i)=>{
//             return <li key={i}>{users}</li>
//         })
//       }
//     </div>
//   )
// }

// export default CBCStateEX;




import React, { Component } from 'react';

class CBCStateEX extends Component {
  constructor() {
    super();
    this.state = {
      users: ["vamshi", "579", "vaishali", "Jannnu", "Jana"],
      num: 100,
    };
  }

  changeNumber = () => {
    this.setState({ num: 200 });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
        <p>Current Number: {this.state.num}</p>
        <button onClick={this.changeNumber}>Change Number</button>
      </div>
    );
  }
}

export default CBCStateEX;

