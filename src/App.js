import { Route, Routes} from "react-router-dom"
import Demo from "./pages/demo/demo"
import Home from "./pages/home/home"

import './App.css'
import { useEffect } from "react"

function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/demo" element={<Demo/>}/>
        </Routes>
    </div>

  );
}

export default App;