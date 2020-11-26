import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './webpage/components/homepage/homepage.component';
import WebshopApp from './webshop/app-webshop';

function App() {
  return (
    <div className="App">
       
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/art-webshop/" component={HomePage} />    
              <Route exact path="/art-webshop/webshop" component={WebshopApp} />                               
            </Switch>
            </BrowserRouter>
          </Container>
     
    </div>
  );
}

export default App;
