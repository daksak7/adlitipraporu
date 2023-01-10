import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {AddReport} from "./components/AddReport";
import 'rsuite/dist/rsuite.min.css'

function App() {
  return (
    <>
      <AddReport />
    </>
  );
}

export default App;

