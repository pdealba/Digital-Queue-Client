import { Link } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  const navLinks = [
    { name: "Timer", path: "/timer" },
    { name: "Chat", path: "/chat" },
  ];

  return (
    <div>
      <ul className={classes["nav-ul"]}>
        {navLinks.map(({ name, path }) => (
          <li>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
