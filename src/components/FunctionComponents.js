// import React from 'react'
// import '.Styles.css'

// function FunctionalComponent(props){
//     console.log(props)
//     let applyStyle = props.apply ? 'heading':' '
//     let inlineStyle={
//         color:'green',
//         backgroundColor: 'red',
//         fontSize:'50px'
//     }
//   return (
//     <div>
//         <h1 class={`${applyStyle} font-style`}> Welcome to my React Class {props.clgName}, {props.city} </h1>
//         {props.children}
//         <h2 style={inlineStyle}>Good afternoon </h2>
//     </div>
//   );
// }

// export default FunctionalComponent

// import React from 'react';
// import './Styles.css';

// function FunctionalComponent(props) {
//     console.log(props);
//     const applyStyle = props.apply ? 'heading' : '';
//     const inlineStyle = {
//         color: 'green',
//         backgroundColor: 'red',
//         fontSize: '50px',
//     };

//     return (
//         <div>
//             <h1 className={`${applyStyle} font-style`}>
//                 Welcome to my React Class {props.clgName}, {props.city}
//             </h1>
//             {props.children}
//             <h2 style={inlineStyle}>Good afternoon</h2>
//         </div>
//     );
// }

// export default FunctionalComponent;

import React, { useState } from 'react';
import './Styles.css';

function FunctionalComponent() {
    // State to toggle styles and text
    const [isAlternate, setIsAlternate] = useState(false);

    // Function to toggle styles and text
    const toggleStyle = () => {
        setIsAlternate(!isAlternate);
    };

    return (
        <div>
            {/* Dynamic heading */}
            <h1 className={isAlternate ? 'alternate-heading' : 'heading'}>
                {isAlternate ? 'Thank You For Visiting' : 'Welcome To My Project'}
            </h1>
            {/* Button to change text and styles */}
            <button onClick={toggleStyle} style={{ marginTop: '20px', padding: '10px 20px' }}>
                {isAlternate ? 'Reset' : 'Change'}
            </button>
        </div>
    );
}

export default FunctionalComponent;
