import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import Head from "../Head/Head";

export function Home({isAuthenticated}) {
  return (
    <>
      {isAuthenticated ? <><Head />
        <Calendar /></> : <h1>Please <Link to="/login">Login</Link> first!</h1>}
    </>
  );
}
