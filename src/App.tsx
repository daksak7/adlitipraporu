import { BrowserRouter, Routes, Route } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { AddReport } from "./components/AddReport";
import Dashboard from "./components/Dashboard";
import { Provider } from "./contexts/ReportDataContext";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addreport" element={<AddReport />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
