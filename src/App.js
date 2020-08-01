import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About Us';
import Contacts from './components/Contacts';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <nav className="navbar">
      <Router style={{backgroundColor:'blue'}}> 
      <Link to="/" style={{marginLeft:'10em', color:'purple', textDecoration:'none'}}>HOME</Link>
      <Link to="/" style={{marginLeft:'10em', color:'purple', textDecoration:'none'}}>ABOUT US</Link>
      <Link to="/" style={{marginLeft:'10em', color:'purple', textDecoration:'none'}}>CONTACTS</Link>
      <Link to="/" style={{marginLeft:'10em', color:'purple', textDecoration:'none'}}>SERVICES</Link>
      <Link to="/" style={{marginLeft:'10em', color:'purple', textDecoration:'none'}}>PORTFOLIO</Link>

      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/services" exact component={Services} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
    </nav>

  
    
  );
}

export default App;
