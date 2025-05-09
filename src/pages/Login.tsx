import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      const res = await api.post("/login", data);
      login(res.data.access_token);
      navigate("/projects");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f7f7f7',
      zIndex: 9999
    }}>
      <div style={{
        padding: '40px',
        borderRadius: '8px',
        background: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <AuthForm onSubmit={handleLogin} type="login" />
        <div style={{
          marginTop: '10px',
          textAlign: 'right',
          fontSize: '14px'
        }}>
          Don't have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}
