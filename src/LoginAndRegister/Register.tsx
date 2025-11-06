import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/login_register";

function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async () => {

    if (!firstName || !lastName || !userName) {
      alert("First Name and Last Name, User Name are mandatory !!!");
      return;
    }

    if (!email || !password) {
      alert("Please fill in both email and password");
      return;
    }

    // check if password and confirm password are same or not
    if (!password || !confirmPassword || password !== confirmPassword) {
      alert("Password and Confirm password should be same !!!");
      return;
    }

    // check if password and confirm password are same or not
    if (!role) {
      alert("Please select the Role !!!");
      return;
    }

    // You can call your register API here later

    const response =  await registerUser(firstName, lastName, userName, email, password, confirmPassword, mobile, role);

    if (response == null) {
      alert("Registration failed. Please try again.");  
    } else {
      alert("Registered successfully!");
      navigate("/login");
    }

  };

  const goToLogin = () => {
    navigate("/login");
  };

  const handleRoleChange = (event: any) => {
    setRole(event.target.value);
    console.log(event.target.value);
    console.log(role);
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
            Register
          </Typography>

          <Stack spacing={2}>

            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

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

            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />

            <TextField
              label="Mobile Number"
              type="text"
              variant="outlined"
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleRoleChange}
                >
                  <MenuItem value={'ADMIN'}>Admin</MenuItem>
                  <MenuItem value={'NORMAL'}>Normal</MenuItem>
                </Select>
              </FormControl>
            </Box>

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
