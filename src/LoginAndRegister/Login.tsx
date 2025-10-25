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
import { loginUser } from "./api/api_login_register";

function Login() {
  const [userName, setuserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const redirectToDashboard = async () => {
    // Your function logic here

    if (!userName || !password) {
      alert("Please fill in both UserName and password");
      return;
    }

    const response =  await loginUser(userName, password);
    
    if (response == null) {
      alert("Login failed. Please try again.");
    } else {
      alert("Login successfully!");
      navigate("/chart");
    }
  };

  const redirectToRegister = () => {
    // Navigate only if login is successful
    navigate("/register");
  }

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
            <TextField label="Email" variant="outlined" fullWidth
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <Button variant="contained" color="primary" fullWidth
              onClick={redirectToDashboard}>
              Login
            </Button>
            <Button variant="outlined" color="secondary" fullWidth
              onClick={redirectToRegister}>
              Sign Up
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
