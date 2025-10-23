import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    // Your login API logic here
    alert("Login successful!");
    navigate("/chart");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#b9a2efff",
      }}
    >
      <Card sx={{ width: 350, p: 2, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" textAlign="center" gutterBottom>
            Login
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography textAlign="center" variant="body2">
            Don't have an account?{" "}
            <span
            style={{ color: "#1976d2", cursor: "pointer", fontWeight: "bold" }}
            onClick={goToRegister}
            >
            Register here
            </span>
            </Typography>

          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
