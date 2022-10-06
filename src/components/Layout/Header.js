import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <ul className={classes["nav-ul"]}>
        <li>
          <Link to="/timer">Timer</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
