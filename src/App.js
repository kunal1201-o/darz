import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';

import Men from './Components/Men';
import Women from './Components/Women';
import Baby from './Components/Baby';
import Boy from './Components/Boy';
import Girl from './Components/Girl';

import Main from './Components/Main';
import Mutiple from './Components/Mutiple';
import Profile from './Components/Profile';
import About from './Components/About';
import Shop from './Components/Shop';
import DryClean from './Components/DryClean';
import Contact from './Components/Contact';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Tailor from './Components/Tailor';
import Cart from './Components/Cart';
import Search from './Components/Search';




function App() {

  return (
    <>
    <Router>
      
    <Switch>
      
      <Route  path="/"  exact component={Main}/>
    
      <Route    path="/Men"  component={Men}/>
      <Route  exact path="/Women"  component={Women}/>
      <Route    exact path="/Baby"  component={Baby}/>
      <Route  exact path="/Boy"  component={Boy}/>
    <Route exact path='/Mutiple' component={Mutiple}/>
    <Route exact path='/Profile' component={Profile}/>
    <Route exact path='/About' component={About}/>
    <Route exact path='/Shop' component={Shop}/>
    <Route exact path="/DryClean"  component={DryClean}/>
    <Route exact path="/Contact"  component={Contact}/>
    <Route exact path="/Home"  component={Home}/>
    <Route exact path="/LogIn"  component={LogIn}/>
    <Route exact path="/Tailor"  component={Tailor}/>
    <Route exact path="/Cart"  component={Cart}/>
    <Route exact path="/Search"  component={Search}/>
      <Route exact path="/Girl"  component={Girl}/>
    </Switch>
    </Router>
       
         
       
    </>
  );
}

export default App;
