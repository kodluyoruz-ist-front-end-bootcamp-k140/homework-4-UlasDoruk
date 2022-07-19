import React from "react";
import { BsGithub } from "react-icons/bs";
import "../Navbar/navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark" >
      <a className="navbar-brand" href="#">
        Lotr Store
      </a>
      <form className="form-inline my-2 my-lg-0 d-flex" >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-white my-2 my-sm-0" type="submit" >
          Search
        </button>
          <a
            href="https://github.com/UlasDoruk"
            target="blank"
            style={{ color: "inherit" }}
          >
            {<BsGithub />}
          </a>
      </form>
    </nav>
  );
}

export default Navbar;
