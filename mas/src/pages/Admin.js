import React from "react";
import {Button} from "@blueprintjs/core"
import { useAuth } from "../context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div><h1>Administration</h1></div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;
