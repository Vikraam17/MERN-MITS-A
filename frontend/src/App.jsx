import Header from "./component/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Parent from "./component/Parent";
import Counter from "./component/Counter";
const App = ()=>{
  return(
    // Fragment Tag
    <>
      <h1>MERN</h1>
      <h2>React js</h2>
      {/* <Header />
      <Home/>
      <About/>
      <Contact/>
      <Service/> */}
      {/* <Parent/> */}
      <Counter/>
    </>
  )
}

export default App;