import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './modules/module'

import "./index.css";

ReactDOM.render(

<AuthProvider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
</AuthProvider>,

  document.getElementById("root")
)