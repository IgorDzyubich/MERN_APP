import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Navbar from './Components/Navbar/Navbar';
import NavbarFree from './Components/NavbarFree/NavbarFree';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFoundPageFree from './Components/NotFoundPage/NotFoundPageFree';
import './App.css';

class App extends Component {
  render() {
    return (
          <div className='app-wrapper-content'>
            <Switch>
                <Route path='/app' component={NavbarFree} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <ProtectedRoute path='/dashboard' component={Navbar} />
                <Route render={() => <NotFoundPageFree /> }/>
            </Switch>
          </div>
    );
  }
}

export default App