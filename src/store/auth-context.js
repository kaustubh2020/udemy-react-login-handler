import React from "react";

const AuthContext = React.createContext({
  isloggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
