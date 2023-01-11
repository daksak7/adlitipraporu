import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { AddReport } from "./components/AddReport";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}>
            <Route index element={<Dashboard />} />
            <Route path="/addreport" element={<AddReport />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
