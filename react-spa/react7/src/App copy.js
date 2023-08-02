import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Service from './Navbar/Service';
import Contact from './Navbar/Contact';

class App extends React.Component {

    render(){
    return ( 
    <div>
         <Router>
         <Navbar/>
      <Routes>
          <Route path="/index" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </Router>
      </div>

      )
        
}
    }

export default App
