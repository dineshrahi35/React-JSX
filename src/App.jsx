// // import React from 'react'
// // import Navbar from './components/Navbar';
// // import {BrowserRouter  , Routes , Route} from "react-router-dom";
// // import Dashboard from './pages/Dashboard';
// // import Clasroom from './pages/Clasroom';
// // import Assessments from './pages/Assessments';
// // import Store from './pages/Store';
// // import Calender from './pages/Calender';
// // import News from './pages/News';
// // import Blog from './pages/Blog';
// // import PageNotFound from './pages/PageNotFound';
// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //         <Navbar/>
// //         <Routes>
// //             <Route path='/' element={<Dashboard/>}/>
// //             <Route path='/classroom' element={<Clasroom/>}/>
// //             <Route path='/assessment' element={<Assessments/>}/>
// //             <Route path='/store' element={<Store/>}/>
// //             <Route path='/calender' element={<Calender/>}/>
// //             <Route path='/news' element={<News/>}/>
// //             <Route path='/blog' element={<Blog/>}/>
// //             <Route path='*' element={<PageNotFound/>}/>
// //         </Routes>
// //     </BrowserRouter>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import Navbar from './components/Navbar';
// // import {BrowserRouter  , Routes , Route} from "react-router-dom";
// // import Dashboard from './pages/Dashboard';
// // import Classroom from './pages/Clasroom';
// // import Assessments from './pages/Assessments';
// // import Store from './pages/Store';
// // import Calender from './pages/Calender';
// // import News from './pages/News';
// // import Blog from './pages/Blog';
// // import PageNotFound from './pages/PageNotFound';
// // import Profile from './pages/Profile';
// // import MyAccount  from './pages/MyAccount';
// // import MySettings  from './pages/MySettings';
// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //         <Navbar/>
// //         <Routes>
// //             <Route path='/' element={<Dashboard/>}/>
// //             <Route path='/clasroom' element={<Classroom/>}/>
// //             <Route path='/assessment' element={<Assessments/>}/>
// //             <Route path='/store' element={<Store/>}/>
// //             <Route path='/calender' element={<Calender/>}/>
// //             <Route path='/news' element={<News/>}/>
// //             <Route path='/blog' element={<Blog/>}/>
// //             <Route path='/profile' element={<Profile/>}></Route>
// //             <Route path='/profile/myaccount' element={<MyAccount/>}/>
// //             <Route path='/profile/mysettings' element={<MySettings/>}/>
// //             <Route/>
            
            
// //             <Route path='*' element={<PageNotFound/>}/>
// //         </Routes>
// //     </BrowserRouter>
// //   )
// // }

// // export default App


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './crudcomponents/Home';
// import Create from './crudcomponents/Create';
// import Edit from './crudcomponents/Edit';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/edit" element={<Edit />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from "react";
// import Card from "./components/Cards";
// import "./components/Cards";

// const App = () => {
//   const cardData = [
//     {
//       title: "Sunset View",
//       description: "You can Add Description Here...",
//       image: "https://via.placeholder.com/300x200?text=Sunset+1",
//     },
//     {
//       title: "Sunset View",
//       description: "You can Add Description Here...",
//       image: "https://via.placeholder.com/300x200?text=Sunset+2",
//     },
//     {
//       title: "Landscape",
//       description: "You can Add Description Here...",
//       image: "https://via.placeholder.com/300x200?text=Landscape",
//     },
//     {
//       title: "Sunset View",
//       description: "You can Add Description Here...",
//       image: "https://via.placeholder.com/300x200?text=Sunset+3",
//     },
//   ];

//   return (
//     <div className="card-container">
//       {cardData.map((card, index) => (
//         <Card
//           key={index}
//           image={card.image}
//           title={card.title}
//           description={card.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './crudcomponents/Home';
import Create from './crudcomponents/Create';
import Edit from './crudcomponents/Edit';
import {ToastContainer} from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App