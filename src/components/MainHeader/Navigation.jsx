import { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isloggedIn === true ? (
          <li>
            <a href="/">Users</a>
          </li>
        ) : null}

        {ctx.isloggedIn === true ? (
          <li>
            <a href="/">Admin</a>
          </li>
        ) : null}

        {ctx.isloggedIn === true ? (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navigation;
