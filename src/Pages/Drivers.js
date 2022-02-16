import React from "react";

const Drivers = ({ drivers }) => {
  const cols = [
    "First Name",
    "Last Name",
    "DOB",
    "License No",
    "Email",
    "Phone Number",
    "License Expiration Date",
  ];

  return (
    <div>
      <h2>All Saved Drivers</h2>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          {cols.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </thead>

        {drivers?.length > 0 &&
          drivers.map((driver) => (
            <tbody key={driver.id}>
              <td>{driver.first_name}</td>
              <td>{driver.last_name}</td>
              <td>{driver.dob}</td>
              <td>{driver.license_no}</td>
              <td>{driver.email}</td>
              <td>{driver.phone_number}</td>
              <td>{driver.license_expiration_date}</td>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default Drivers;
