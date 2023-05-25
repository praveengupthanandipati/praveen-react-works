import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myskills from "./pages/Myskills";
import Myinfo from "./pages/Myinfo";

function Header() {
  var name = "Praveen";
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>List of Tasks by {name}</h1>
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}>
              <Route path="myinfo" element={<Myinfo />}></Route>
              <Route path="myskills" element={<Myskills />}></Route>
            </Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Header;
