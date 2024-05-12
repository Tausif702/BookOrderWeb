import * as React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './index.css' ;
  import {BrowserRouter } from 'react-router-dom';  
const root = createRoot(document.getElementById("root"));

root.render(
 <div className="dark:bg-slate-900 dark:text-white">
   <BrowserRouter>
   <App/>
  </BrowserRouter>
 </div>
);