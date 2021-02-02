import React from "react";
import {Link} from "react-router-dom"
//*Using bootstrap for easier styling from https://getbootstrap.com/docs/5.0/components/navbar/
//*Using the link method from router to link to the path of our route inside app.js

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar shadow fixed-top navnar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Book
          </Link>
          <div>
            <Link to="/contacts/add" className="btn btn-outline-light">
              Create Contact
            </Link>
            <Link to="/memegen" className="btn btn-outline-light mx-3">
              Meme Generator
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
