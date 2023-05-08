import './App.scss';
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import Portafolio from "./components/portafolio/Portafolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"


function App() {


  return (
    <div className="app">
   <Nav/>
      <div className="sections">
        <Home/>
        <Portafolio/>
        <Works/>
        <Contact/>

      </div>
    </div>
  )
}

export default App
