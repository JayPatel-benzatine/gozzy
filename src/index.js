import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root') );
root.render(
  <RecoilRoot>
    <RecoilNexus />
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </RecoilRoot>
);
