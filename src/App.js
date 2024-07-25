import { Route, Routes } from "react-router-dom"
import Demo from "./pages/demo"
import Home from "./pages/home"


function App() {

  return (
    
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/media" element={<Media/>}/>
          </Routes>

  );
}

export default App;