import Header from "./component/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Parent from "./component/Parent";
import Counter from "./component/Counter";
import Signup from "./auth/Signup";
import UseEffect from "./hooks/UseEffect";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import UseEffectApi from "./hooks/UseEffectApi";
import Login from "./auth/Login";
const App = ()=>{
  return(
    // Fragment Tag
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/useState" element={<Counter/>}/>
        <Route path="/useEffect" element={<UseEffect/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/useEffectApi" element={<UseEffectApi/>}/>
      </Routes>
    </>
  )
}

export default App;