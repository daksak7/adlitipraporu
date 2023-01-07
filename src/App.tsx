import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Button } from "@mui/material";
import Main from "./components/Main";
import NewReport from "./components/NewReport";
import { Dashboard } from "@mui/icons-material";
function App() {
  const [reports, setReports] = useState([]);

  enum Ebatlar {
    small,
    medium,
    large,
  }
  console.log(Ebatlar);

  return (
    <div className="App">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/newreport" element={<NewReport />}></Route>
          <Route path="*" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
