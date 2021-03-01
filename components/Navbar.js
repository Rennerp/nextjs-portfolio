import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [collapse, setCollapse] = useState("collapse");

  const handleToggleMenu = () => {
    if (collapse == "collapse") {
      setCollapse("");
    } else {
      setCollapse("collapse");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="#">
            Portfolio
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${collapse} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link" href="#">
                  Github
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
