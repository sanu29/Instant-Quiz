import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {GetQuizDataProvider} from "./context/quizAllData"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GetQuizDataProvider>
    <App />
    </GetQuizDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
