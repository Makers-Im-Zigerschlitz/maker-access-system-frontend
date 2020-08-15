import {useContext} from "react";
import axios from 'axios'
import { UserDispatchContext} from "../context/UserProvider";

function UserQuery(props) {
  const setUserDetails = useContext(UserDispatchContext);
  //Check if Auth already exists - if yes, get user information
    axios.get("/auth/me").then(result => {
      if (result.status===200||result.status===304) {
        setUserDetails({
          uid:result.data.uid,
          username:result.data.username,
          password:result.data.password,
          level:result.data.level,
          loggedIn:true,
        });
    } else {
      setUserDetails({
        uid:"",
        username:"",
        password:"",
        level:"",
        loggedIn:false,
      })
    }
    }).catch(e => {
      console.log(e);
    });
  return null;
}
export default (UserQuery);
