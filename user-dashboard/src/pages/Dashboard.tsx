import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {user?.role === "Admin" && <p>Admin Controls</p>}
      {user?.role === "Editor" && <p>Content Editor Panel</p>}
      {user?.role === "Viewer" && <p>Read-Only Reports</p>}
    </div>
  );
};

export default Dashboard;