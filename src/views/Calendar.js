import { useState } from "react";
import Calendar from "react-calendar";

const CalendarComp = () => {
    document.body.className="calendar-body";
    const [date, setDate] = useState(new Date())

    return ( 
        <div className="calendar-main">
        <div className="calendar-container">
            <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="calendar-selected-text">
            Selected date: {date.toDateString()}
         </div>
         </div>
     );
}
 
export default CalendarComp;