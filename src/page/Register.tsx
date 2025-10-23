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

function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please fill in both email and password");
      return;
    }
    // You can call your register API here later
    alert("Registered successfully!");
    navigate("/chart");
  };

  const goToLogin = () => {
    navigate("/login");
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
            Register
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
              onClick={handleRegister}
            >
              Register
            </Button>

            <Typography textAlign="center" variant="body2">
             Already have an account?{" "}
            <span
            style={{ color: "#1976d2", cursor: "pointer", fontWeight: "bold" }}
            onClick={goToLogin}
            >
            Login
            </span>
            </Typography>

          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
