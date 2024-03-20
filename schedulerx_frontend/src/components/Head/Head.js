
import { useState } from "react";
import classes from "./Head.module.css";
import { format } from "date-fns";
function Head() {
   const [currentTime, setCurrentTime] = useState(new Date());

   setInterval(() => {
      setCurrentTime(new Date());
   }, 1000);
   return (
      <div className={classes.headContainer}>
         <h1 className={classes.title}>SchedulerX</h1>
         <h2 className={classes.greet}>Hello Hani!</h2>
         <h2 className={classes.time}>{format(currentTime, "HH:mm:ss") + "🕔"}</h2>
      </div>
   );
}

export default Head;