import React, { Component } from 'react';
import Header from "./common/Header";
import {BrowserRouter,Route} from 'react-router-dom'
import Home from "./containers/Home";
import Detail from "./containers/Detail";
import './style'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <BrowserRouter>
              <div>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/detail" component={Detail}></Route>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
