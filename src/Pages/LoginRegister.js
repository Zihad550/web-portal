import React, { useState } from "react";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Input from "../components/Input/Input";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [data, setData] = useState({});
  console.log(data);

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    /* fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (JSON.parse(localStorage.getItem("token")) !== data.token) {
          alert("User with the password and email does not exists. ");
        } else {
          alert("log in successfully");
          window.location.reload();
        }
      });
    e.target.reset();
    console.log("submitted"); */

    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        localStorage.setItem("id", JSON.stringify(data.id));
        e.target.reset();
        console.log("submitted");
        window.location.reload();
      });
  };

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();

    if (data.re_typed_password !== data.password) {
      alert("Password and Re type password doesn't match.");
    } else {
      fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("id", JSON.stringify(data.id));
          e.target.reset();
          console.log("submitted");
          window.location.reload();
        });
    }
  };
  return (
    <Container>
      {!register ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <Input
              style={{ marginBottom: "5px" }}
              onBlur={handleData}
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <Input
              style={{ marginBottom: "5px" }}
              onBlur={handleData}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
            <Button type="submit" variant="btn-primary">
              Login
            </Button>
          </form>
          <p>
            New User,{" "}
            <Button variant="btn-secondary" onClick={() => setRegister(true)}>
              Register
            </Button>
          </p>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <Input
              style={{ marginBottom: "5px" }}
              onBlur={handleData}
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <Input
              style={{ marginBottom: "5px" }}
              onBlur={handleData}
              placeholder="E-mail"
              type="email"
              name="email"
              required
            />
            <Input
              style={{ marginBottom: "5px" }}
              onBlur={handleData}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
            <Input
              style={{ marginBottom: "5px" }}
              onBlur={handleData}
              placeholder="Re-type Password"
              type="password"
              name="re_typed_password"
              required
            />
            <Button type="submit" variant="btn-primary">
              Register
            </Button>
          </form>
          <p>
            Old User,{" "}
            <Button variant="btn-secondary" onClick={() => setRegister(false)}>
              Login
            </Button>
          </p>
        </div>
      )}
    </Container>
  );
};

export default Login;
