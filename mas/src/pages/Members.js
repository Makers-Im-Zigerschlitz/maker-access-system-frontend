import React from "react";
import {Table,Column} from "@blueprintjs/table";

function Home(props) {
return (
  <div>
  <h1>Members</h1>
  <Table numRows={5}>
    <Column name="ID"/>
    <Column name="First name"/>
    <Column name="Last name"/>
    <Column name="Street"/>
    <Column name="ZIP"/>
    <Column name="State"/>
    <Column name="City"/>
    <Column name="Country"/>
</Table>
  </div>
)
}

export default Home;
