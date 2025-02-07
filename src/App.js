// import React from 'react';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Sidebar1 from './components/Sidebar1';
// import Main from './components/Main';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar />
//       <Main />
//       <div className = 'sidebar'>
//       <Sidebar />
//       <Sidebar1 />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import React, { Component } from 'react';
// import CBCPropEx from './propsex/CBCPropEx';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx
//           username="Janardhan"
//           age={20}
//           hobbies={["Playing", "Reading books", "Watching YouTube"]}
//           address={{ city: "Jangoan", area: "RamaChandraPuram" }}
//           sendFun={() => alert("Hi, I am Janardhan")}
//         />
//       </div>
//     );
//   }
// }


//       import React, { Component } from 'react';
//       import CBCPropEx from './propsex/CBCPropEx'; // Assuming CBCPropEx is correctly defined in the specified path
      
//       export default class App extends Component {
//         render() {
//           return (
//             <div>
//               <CBCPropEx
//                 username="Janardhan"
//                 isMarried={true}
//                 hobbies={["Playing", "Reading books", "Watching YouTube"]}
//               />
//             </div>
//           );
//         }
//       }
      




// import React, { Component } from 'react';
// import CBCStateEX from './stateexample/CBCStateEX'; // Adjust path as per your folder structure
// // import CBCStateEX from './stateexample/FBCStateEX';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>State and Props Example</h1>
//         <CBCStateEX />
//       </div>
//     );
//   }
// }
   

// import React, {Component} from 'react'
// import FunctionalComponents from './components/FunctionComponents';
// function App ()  {
//   return (
//     <div className="App">
//     <FunctionalComponents clgName='MRU' city='hyd'></FunctionalComponents>
      
//     </div>
//   )
// }

// export default App

import React from 'react';
import FunctionalComponent from './components/FunctionComponents';

function App() {
    return (
        <div className="App">
            <FunctionalComponent clgName="MRU" city="Hyderabad" apply={true}>
                <p>This is a child element passed as props.</p>
            </FunctionalComponent>
        </div>
    );
}
export default App;

// welcome to my class oe a button down when i click on the button it want to be chanfe and all the style should be change and differnt from past.
