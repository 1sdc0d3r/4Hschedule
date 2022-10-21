import React from "react";

export default function Calendar(props) {
  const { scheduleDays, splitDateValues, scheduleEvents } = props;

  return (
    <ul className="schedule">
      {/*  //todo sort by date */}
      {scheduleDays.map((e, i) => {
        const s = e.split("-");
        let year = s[0],
          month = s[1],
          day = s[2];
        //todo working with Date object here
        // if (month < 10) month = `0${month}`;
        const curStrDate = `${year}-${month < 10 ? "0" : ""}${month}-${day}`;
        const { strMonth, strDay } = splitDateValues(new Date(curStrDate));
        // console.log({ month });
        // console.log("new date", curStrDate, new Date(curStrDate));
        // console.log(strMonth, strDay);
        return (
          <ul className="day" id={e} key={i}>
            <h4>
              {strDay}, {strMonth} {day}
            </h4>
            {scheduleEvents
              .filter((e) => {
                const { strDate } = splitDateValues(e.date);
                // const strDate = `${year}-${month}-${day}`;
                // console.log(strDate, curStrDate, strDate === curStrDate);
                return strDate === curStrDate;
              })
              .map((e, i) => createCalendarEvent(e, i))}
          </ul>
        );
      })}
    </ul>
  );

  function createCalendarEvent(event, i) {
    const { date, farmHand, chore, species } = event;
    const { hour, mins } = splitDateValues(date);

    return (
      <div className="event" key={i}>
        <p>
          {hour}:{mins == "0" ? "00" : mins}
        </p>
        <p>
          {farmHand} - {chore} - {species}
        </p>
      </div>
    );
  }
}
