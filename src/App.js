import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidebar1 from './components/Sidebar1';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Main />
      <div className = 'sidebar'>
      <Sidebar />
      <Sidebar1 />
      </div>
      <Footer />
    </div>
  );
};

export default App;
