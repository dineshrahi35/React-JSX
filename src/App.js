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

// import React from 'react';
// import FunctionalComponent from './components/FunctionComponents';

// function App() {
//     return (
//         <div className="App">
//             <FunctionalComponent clgName="MRU" city="Hyderabad" apply={true}>
//                 <p>This is a child element passed as props.</p>
//             </FunctionalComponent>
//         </div>
//     );
// }
// export default App;

// welcome to my class oe a button down when i click on the button it want to be chanfe and all the style should be change and differnt from past.

// import React from 'react';
// import FunctionalComponent from './components/FunctionComponents';
// import MyForm from './components/MyForm';
// function App() {
//     return (
//         <div className="App">
//             <FunctionalComponent />
//         </div>
//     );
// }

// export default App;
// 
// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       taskInput: "",
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ taskInput: event.target.value });
//   };

//   addTask = () => {
//     const { tasks, taskInput } = this.state;
//     if (taskInput.trim()) {
//       this.setState({
//         tasks: [...tasks, taskInput],
//         taskInput: "",
//       });
//     }
//   };

//   deleteTask = (index) => {
//     const { tasks } = this.state;
//     this.setState({
//       tasks: tasks.filter((_, i) => i !== index),
//     });
//   };

//   render() {
//     const { tasks, taskInput } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Todo List</h1>
//           <div className="input-section">
//             <input
//               type="text"
//               placeholder="Add a task..."
//               value={taskInput}
//               onChange={this.handleInputChange}
//             />
//             <button onClick={this.addTask}>Add</button>
//           </div>
//           <ul className="task-list">
//             {tasks.map((task, index) => (
//               <li key={index}>
//                 {task}
//                 <button onClick={() => this.deleteTask(index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
// App.js
// import React from "react";
// import ClassComponent from "./ClassComponent";
// import "./Style.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to the My Project</h1>
//         <ClassComponent />
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./Style.css";
// import TaskList from "./TaskList";

// function App() {
//   const [tasks, setTasks] = useState(["Learn React", "Build a Project", "Have Fun"]);
//   const [newTask, setNewTask] = useState("");

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, newTask.trim()]);
//       setNewTask("");
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Task Manager</h1>
//       <div className="task-input">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Add a new task"
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <TaskList tasks={tasks} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import UseEffect from './hooksexample/UseEffectEx';
import RefExample from './hooksexample/RefExample';
// import Video from './Video.mp4'
const App = () => {
  return (
    <div>
      <h1>React Application</h1>
      <RefExample />
    </div>
  );
};

export default App;
