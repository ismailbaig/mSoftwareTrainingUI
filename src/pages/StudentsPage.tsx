import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { TextField, Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";

interface Student {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  course: string;
}

const StudentsPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/students");
      setStudents(response.data);
    } catch (error: any) {
      console.error("Error fetching students:", error);
      if (error.response?.status === 403) {
        alert("You are not authorized to view this page.");
      }
    }
  };

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>All Students</Typography>
      <TextField
        label="Search by name or email"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((student) => (
              <TableRow key={student._id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.mobile}</TableCell>
                <TableCell>{student.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default StudentsPage;
