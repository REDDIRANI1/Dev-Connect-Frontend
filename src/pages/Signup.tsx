import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import api from "../services/api";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = async (data: { username: string; password: string }) => {
    try {
      await api.post("/signup", { ...data, email: `${data.username}@example.com` });
      navigate("/");
    } catch (err) {
      alert("Signup failed");
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
        <AuthForm onSubmit={handleSignup} type="signup" />
      </div>
    </div>
  );
}
