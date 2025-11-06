import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { Box, Typography, Paper } from "@mui/material";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/student/me");
      setUser(res.data);
    } catch (err) {
      console.error("Error loading profile:", err);
    }
  };

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>My Profile</Typography>
      <Paper sx={{ p: 2 }}>
        <Typography><b>Name:</b> {user.name}</Typography>
        <Typography><b>Email:</b> {user.email}</Typography>
        <Typography><b>Mobile:</b> {user.mobile}</Typography>
        <Typography><b>Course:</b> {user.course}</Typography>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
