import { Route, Routes } from "react-router-dom"
import Demo from "./pages/demo/demo"
import Home from "./pages/home/home"


function App() {

  return (
    
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/demo" element={<Demo/>}/>
          </Routes>

  );
}

export default App;