import { Route, Routes } from "react-router-dom"
import Demo from "./pages/demo/demo"
import Home from "./pages/home/home"
import Navbar from "./components/public/navbar/navbar"

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="AppContent">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/demo" element={<Demo/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;