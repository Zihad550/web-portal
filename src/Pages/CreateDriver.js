import React, { useState } from "react";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Input from "../components/Input/Input";
import Drivers from "./Drivers";

const CreateDriver = () => {
  const [data, setData] = useState({});
  console.log(data);

  // get all drivers from localstorage
  const drivers = JSON.parse(localStorage.getItem("drivers"));

  // handle form data
  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  // create new driver
  const handleCreateDriver = (e) => {
    const oldDrivers = JSON.parse(localStorage.getItem("drivers"));

    if (oldDrivers && oldDrivers.length) {
      localStorage.setItem(
        "drivers",
        JSON.stringify([...oldDrivers, { ...data, id: oldDrivers.length + 1 }])
      );
    } else {
      localStorage.setItem("drivers", JSON.stringify([{ ...data, id: 1 }]));
    }
    e.target.reset();
  };

  const handleLogOut = () => {
    localStorage.removeItem("id");
    window.location.reload();
  };
  return (
    <Container style={{ marginTop: "30px" }}>
      <h2 style={{ display: "inline-block" }}>Create new Driver</h2>
      <Button
        onClick={handleLogOut}
        style={{ marginLeft: "10%" }}
        variant="btn-error"
      >
        Log Out
      </Button>

      <form onSubmit={handleCreateDriver}>
        <Input
          style={{ marginBottom: "5px" }}
          onBlur={handleData}
          placeholder="First Name"
          type="text"
          name="first_name"
          required
        />
        <Input
          style={{ marginBottom: "5px" }}
          onBlur={handleData}
          placeholder="Last Name"
          type="text"
          name="last_name"
          required
        />
        <Input
          label="Date Of Birth"
          style={{ marginBottom: "5px" }}
          onBlur={handleData}
          type="date"
          name="dob"
          required
        />
        <Input
          style={{ marginBottom: "5px" }}
          onBlur={handleData}
          placeholder="License No"
          type="number"
          name="license_no"
          required
        />
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
          placeholder="Phone Number"
          type="number"
          name="phone_number"
          required
        />
        <Input
          label="License Expiration Date"
          style={{ marginBottom: "5px" }}
          onBlur={handleData}
          type="date"
          name="license_expiration_date"
          required
        />

        <Button type="submit" variant="btn-primary">
          Save
        </Button>
      </form>

      {/* all drivers */}
      <Drivers drivers={drivers} />
    </Container>
  );
};

export default CreateDriver;
