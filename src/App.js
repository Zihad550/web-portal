import { useEffect, useState } from "react";
import "./App.css";
import Verify from "./Pages/Verify";

function App() {
  const [user, setUser] = useState({});
  const id = JSON.parse(localStorage.getItem("id"));

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  return (
    <div className="App">
      <Verify user={user} />
    </div>
  );
}

export default App;
