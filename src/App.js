import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/pages/Home'
import Serviços from './Components/pages/Servicos'
import Produtos from './Components/pages/Produtos'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/servicos' component={Serviços} />
        <Route path='/produtos' component={Produtos} />
      </Switch>
    </Router>
    </>
   
  );
}

export default App
