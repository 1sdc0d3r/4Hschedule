import "./App.css";
import { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Calendar from "./components/Calendar";
import NewEventForm from "./components/NewEventForm";
import navCalIcon from "./images/calendar-50.png";
import navNewCalIcon from "./images/calendar-plus-50.png";

function App() {
  const navigate = useNavigate();
  const [scheduleEvents, setScheduleEvents] = useState([
    // {
    //   date: new Date("2022-09-09"),
    //   farmHand: "Colten",
    //   species: "Pigs",
    //   chore: "Feeding/Watering",
    //   complete: false,
    // },
    // {
    //   date: new Date("2022-10-10"),
    //   farmHand: "Cooper",
    //   species: "Dogs",
    //   chore: "Walk/Exercise",
    //   complete: true,
    // },
    // {
    //   date: new Date("2022-11-11"),
    //   farmHand: "Daniel",
    //   species: "Horses",
    //   chore: "Feeding/Watering",
    //   complete: false,
    // },
    // {
    //   date: new Date("2022-12-12"),
    //   farmHand: "Daniel",
    //   species: "Dogs",
    //   chore: "Feeding/Watering",
    //   complete: true,
    // },
  ]);
  const [scheduleDays, setScheduleDays] = useState([]);

  useEffect(() => {
    scheduleEvents.forEach((e) => {
      // console.log(e);
      const { strDate } = splitDateValues(e.date);
      if (!scheduleDays.includes(strDate)) {
        // setScheduleDays([...scheduleDays, strDate]);
        scheduleDays.push(strDate);
        console.log("date here", strDate);
      }
      console.log({ scheduleDays });
    });
  }, []);
  console.log({ scheduleEvents });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target.elements;
    // console.log(form);
    const date = new Date(form.date.value);
    console.log({ date });
    const farmHand = form.farmHand.value;
    const species = form.species.value;
    const chore = form.chore.value;
    const newEvent = { date, farmHand, species, chore, complete: false };
    if (!scheduleEvents.includes(newEvent))
      //!todo this is not working properly. Duplicate data objects
      setScheduleEvents([...scheduleEvents, newEvent]);
    // update scheduleDays
    const { strDate } = splitDateValues(date);
    // const strDate = `${year}-${month}-${day}`;
    // console.log(strDate);
    if (!scheduleDays.includes(strDate))
      setScheduleDays([...scheduleDays, strDate]);
    return navigate("/"); //todo implement this
  };

  const splitDateValues = (date) => {
    // console.log({ date }); //todo this is off I think
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const year = date.getFullYear();
    const month = date.getMonth();
    const strMonth = months[month + 1];
    const day = date.getDate();
    const strDay = days[date.getDay()];
    let hour = date.getHours();
    if (hour > 12) hour -= 12;
    const mins = date.getMinutes();
    // month < 10 ? "0" : ""
    const strDate = `${year}-${month}-${day}`;
    // console.log({ date });
    // console.log({ year, month, day, hour, mins, strDay, strDate, strMonth });
    return { year, month, day, hour, mins, strDay, strDate, strMonth };
  };
  // console.log(scheduleDays);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Calendar
              splitDateValues={splitDateValues}
              scheduleEvents={scheduleEvents}
              scheduleDays={scheduleDays}
            />
          }
        ></Route>
        <Route
          path="/event"
          element={
            <NewEventForm
              splitDateValues={splitDateValues}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
      <nav>
        <Link to="/">
          <img src={navCalIcon} alt="Calendar" className="nav-cal" />
          {/* calendarLogo */}
        </Link>
        <Link to="/event">
          <img src={navNewCalIcon} alt="New Event" className="nav-new-event" />
          {/* New Event */}
        </Link>
      </nav>
    </div>
  );
}

export default App;
