import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/home";
import Form from "./Components/home";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Route exact path="/" component={Home} />
      <Route path="/form" componetn={Form} />
    </>
  );
};
export default App;
