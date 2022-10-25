import React from "react";

export default function Calendar(props) {
  const { scheduleDays, splitDateValues, scheduleEvents } = props;
  // console.log(scheduleEvents);
  return (
    <div className="schedule">
      <h1>Calendar</h1>
      {/*  //todo sort by date */}
      {scheduleDays.map((e, i) => {
        const s = e.split("-");
        let year = s[0],
          month = s[1],
          day = s[2];
        //todo working with Date object here
        // if (month < 10) month = `0${month}`;
        const curStrDate = `${year}-${month}-${day}`;
        // const curStrDate = `${year}-${month < 10 ? "0" : ""}${month}-${day}`;
        const { strMonth, strDay } = splitDateValues(new Date(curStrDate));
        // console.log({ month });
        // console.log("new date", curStrDate, new Date(curStrDate));
        // console.log(strMonth, strDay);
        return (
          <ul className="day" id={e} key={i}>
            <h4 className="date">
              {strDay}, {strMonth} {day}
            </h4>
            {scheduleEvents
              .filter((e) => {
                const { strDate } = splitDateValues(e.date);
                // const strDate = `${year}-${month}-${day}`;
                console.log(strDate, curStrDate, strDate === curStrDate);
                return strDate === curStrDate;
              })
              .map((e, i) => createCalendarEvent(e, i))}
          </ul>
        );
      })}
    </div>
  );

  function createCalendarEvent(event, i) {
    const { date, farmHand, chore, species } = event;
    const { hour, mins } = splitDateValues(date);

    return (
      <div className="event-wrapper" key={i}>
        <p className="time">
          {hour}:{mins == "0" ? "00" : mins}
        </p>
        <p className="event">
          {farmHand} - {chore} - {species}
        </p>
      </div>
    );
  }
}
