import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import home from "./Components/home";
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Route exact path="/" component={home} />

      <Route path="/form" component={Form} />
    </div>
  );
};
export default App;
