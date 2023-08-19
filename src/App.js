import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Search from './components/Search/Search';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import FrontPage from './components/Poster/FrontPage';
import Footer from './components/Footer/Footer';


const App = () => {
 
  return (
    <div>
      <NavBar/>
      <FrontPage/>
      <Search/>
      <List/>
      <Footer/>
    </div>
  );
};

export default App;
