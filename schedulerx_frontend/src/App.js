import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import Head from "./components/Head/Head";
import DayModal from "./components/DayModal/DayModal";

function App() {
  const [showDayModal, setShowDayModal] = useState(false);

  return (
    <>
      <Head />
      <Calendar onDayButton={setShowDayModal}/>
      {showDayModal&& <div className="overlay"> <DayModal onDayClose={setShowDayModal}/> </div>}
    </>

  );
}
export default App;
