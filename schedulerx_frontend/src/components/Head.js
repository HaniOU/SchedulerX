import classes from "./Head.module.css";
function Head(){
   return(
      <div className={classes.headContainer}>
           <h1>SchedulerX</h1>
           <h2 className={classes.greet}>Hello Hani!</h2>
           <h2 className={classes.time}>18:22 PM</h2>
      </div>
   );
}

export default Head;