import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav>
        <div className="navbar-name">
          <h3>Tom Tutone</h3>
        </div>
        <div className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </div>
        {/* <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
