
import { useEffect, useState } from "react";
import classes from "./Head.module.css";
import { format } from "date-fns";
import { useNavigate } from 'react-router';

function Head() {

   const [currentTime, setCurrentTime] = useState(new Date());
   const navigate = useNavigate();
   function handleLogout() {
      localStorage.removeItem('jwt');
      navigate("/login");
   }
   

   useEffect(() => {
      setInterval(() => {
         setCurrentTime(new Date());
      }, 1000);
   }, []);
   return (
      <div className={classes.headContainer}>
         <h1 className={classes.title}>SchedulerX</h1>
         <h2 className={classes.greet}>Welcome</h2>
         <h2 className={classes.time}>{format(currentTime, "HH:mm:ss") + "🕔"}</h2>
         <button className={classes.logout} onClick={handleLogout}>Logout</button>
      </div>
   );
}

export default Head;