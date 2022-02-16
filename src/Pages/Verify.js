import React from "react";
import CreateDriver from "./CreateDriver";
import Login from "./LoginRegister";
const Verify = ({ user }) => {
  console.log(user);

  return (
    <div>{Object.keys(user).length > 0 ? <CreateDriver /> : <Login />}</div>
  );
};

export default Verify;
