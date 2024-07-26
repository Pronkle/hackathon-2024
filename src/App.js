import { Route, Routes} from "react-router-dom"
import Demo from "./pages/demo/demo"
import Home from "./pages/home/home"
import Diagnostic from "./pages/diagnostic/diagnostic"
import Schedule from "./pages/schedule/schedule"
import Lesson from "./pages/lesson/lesson"

import './App.css'
import { useEffect } from "react"

function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/demo" element={<Demo/>}/>
          <Route path="/diagnostic" element={<Diagnostic/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/lesson" element={<Lesson/>}/>
        </Routes>
    </div>

  );
}

export default App;