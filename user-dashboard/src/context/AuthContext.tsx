import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Role = "Admin" | "Editor" | "Viewer";

interface User {
  username: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = (username: string, role: Role) => {
    setUser({ username, role });
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};