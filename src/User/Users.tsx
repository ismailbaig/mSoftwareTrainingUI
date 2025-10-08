import axios from "axios";
import { useState } from "react";

function Users() {
  const [userName, setUserName] = useState("NA");

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/users/2"
      );
      console.log("Data:", response.data);
      setUserName(response.data.name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>
        <div>
          User name is <b>{userName}</b>
        </div>
        <button onClick={getUser}>Get User</button>
      </div>
    </>
  );
}

export default Users;
