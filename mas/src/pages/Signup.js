import React from "react";
import { Link } from 'react-router-dom';
import {Button,Card,Input,FormGroup} from "@blueprintjs/core"

function Signup() {
  return (
    <div>
    <Card>
      <FormGroup>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="password again" />
        <Button>Sign Up</Button>
      </FormGroup>
      <Link to="/login">Already have an account?</Link>
    </Card>
    </div>
  );
}

export default Signup;
