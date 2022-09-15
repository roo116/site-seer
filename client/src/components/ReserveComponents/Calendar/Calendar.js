import React, { useState } from "react";
import "./Calendar.css";
import Calendar from "react-calendar";

// import "react-calendar/dist/Calendar.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CalendarView = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="flex-column align-center">
      <div className="calendar-section">
        <h2>How many campers?</h2>
        <div className="ticker flex-row justify-center">
          <AddCircleOutlineIcon /> 1 <RemoveCircleOutlineIcon />
        </div>
      </div>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        calendarType={"US"}
      />
      <div className="btn-container calendar-section">
        <button className="btn">Continue</button>
      </div>
    </section>
  );
};

export default CalendarView;
