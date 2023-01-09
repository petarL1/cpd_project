import Calendar from "react-calendar";

const CalendarComp = () => {
    document.body.className="calendar-body";
    return ( 
        <div className="calendar-container">
            <Calendar />
            </div>
     );
}
 
export default CalendarComp;