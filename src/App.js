import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";

export default function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Switch>    

        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/home/:id" component={Detail}></Route>       
      </Switch>
    </div>
</BrowserRouter>
  );
};
