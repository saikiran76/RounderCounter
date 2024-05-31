import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';

import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
