import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import FavWatch from './components/FavWatch'
import Header from './components/Header'
import LogoutButton from './components/Logout';
import LoginButton from './components/Login';

export class App extends Component {
  render() {
    return (
      
      <>
      <Header/>

      {this.props.auth0.isAuthenticated?(<><LogoutButton/> <Router>
          
          <Switch>

            <Route path="/fav">
              <FavWatch profile={this.props.auth0.user} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Router></>):<LoginButton/>}
       
      </>
    )
  }
}

export default withAuth0(App);


