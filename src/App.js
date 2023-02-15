import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";

export default function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Switch>    

        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
               
      </Switch>
    </div>
</BrowserRouter>
  );
};
