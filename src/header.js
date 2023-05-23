import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>List of Tasks by Praveen</h1>
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="about" activeClassName="active">About</NavLink>
                <NavLink to="contact" activeClassName="active">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Header;
