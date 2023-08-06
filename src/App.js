import './css/app.scss';

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { WikiProvider } from './context/WikiContext';

import WikiPage from './pages/wiki/WikiPage';
import TranslatorPage from './pages/translatorPage/TranslatorPage';

import Header from "./components/Header";

const wikiProvider = <WikiProvider><WikiPage/></WikiProvider> 

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
          <Header />
          <Routes>  
              <Route path='/wiki' element={wikiProvider}/>
              <Route path='translator' element={<TranslatorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
