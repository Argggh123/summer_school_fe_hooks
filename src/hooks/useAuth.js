import React, { useState, useCallback } from "react";

export function useAuth() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isAuth"));
  const login = useCallback(() => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  }, []);
  const logout = useCallback(() => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  }, []);
  return {
    isAuth,
    login,
    logout,
  };
}
