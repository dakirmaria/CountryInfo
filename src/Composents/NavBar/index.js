import React from "react";
import { Link } from "react-router-dom";
import useStyle from "./style";
const NavBar = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.unorderedListWrapper}>
        <Link to="/" className={classes.linkWrapper}>
          <li>Home</li>
        </Link>
        <Link to="/about" className={classes.linkWrapper}>
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
