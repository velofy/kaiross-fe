import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type AuthUser = { id: string; name: string; email: string } | null;

type AuthContextType = {
  user: AuthUser;
  login: (user: AuthUser) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser>(null);

  useEffect(() => {
    const raw = localStorage.getItem("kaiross_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = (u: AuthUser) => {
    setUser(u);
    if (u) localStorage.setItem("kaiross_user", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("kaiross_user");
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
