// import React from 'react'

// const FBCPropEx = (props) => {
//     console.log(props);
//     if(props.isMarried== true){
//         return (
//             <div>
//                 <h1>{props.username} ia a married person</h1>
//                 {
//                     props.hobbies.map(hobby=>{
//                         return <li>{hobby}</li>
//                     })
//                 }
//             </div>
//         ) 
//        }else{
//         return <h1>Not married</h1>
//        }
//     }
 
// export default FBCPropEx
import React from 'react';

const FBCPropEx = (props) => {
  console.log(props);

  if (props.isMarried) {
    return (
      <div>
        <h1>{props.username} is a married person</h1>
        <h2>Hobbies:</h2>
        <ul>
          {props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <h1>{props.username} is not married</h1>;
  }
};

export default FBCPropEx;


