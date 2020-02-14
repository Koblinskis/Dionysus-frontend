import React from "react";
import {hot} from "react-hot-loader";
import AppRouter from './router/AppRouter'
import "./App.css";

function App() {
  return(
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default hot(module)(App);