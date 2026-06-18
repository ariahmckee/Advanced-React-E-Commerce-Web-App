/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

const [isAdmin, setIsAdmin] = useState(() => {
  return localStorage.getItem("isAdmin") === "true";
});

useEffect(() => {
  localStorage.setItem("isAdmin", isAdmin);
}, [isAdmin]);

  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}