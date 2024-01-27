import Login from "./components/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Datagrid from "./components/datagrid";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/datagrid" element={<Datagrid />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
