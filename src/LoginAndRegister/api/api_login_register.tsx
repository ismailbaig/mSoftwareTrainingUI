import axios from "axios";


export const registerUser = async (
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    mobile: string,
    role: string
) => {
    try {
      const response = await axios.post(
      "http://127.0.0.1:8000/api/register",
      {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        pd: password,
        cpd: confirmPassword,
        mobile: mobile,
        role: role
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
      console.log("Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };


  export const loginUser = async (

    email: string,
    pd: string

) => {
    try {
      const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/login",
      {
        email: email,
        pd: pd,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
      console.log("Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };




// export const getUser = async () => {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:8000/users/2"
//       );
//       console.log("Data:", response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };