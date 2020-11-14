import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
// import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/art-webshop/" component={HomePage} />                          
            </Switch>
            </BrowserRouter>
          </Container>
      </header>
    </div>
  );
}

export default App;
