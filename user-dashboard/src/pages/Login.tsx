import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login("Alice", "Admin")}>Login as Admin</button>
      <button onClick={() => login("Bob", "Editor")}>Login as Editor</button>
      <button onClick={() => login("Charlie", "Viewer")}>Login as Viewer</button>
    </div>
  );
};

export default Login;