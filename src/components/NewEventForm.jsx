import React, { useState } from "react";

export default function NewEventForm(props) {
  const { handleSubmit, splitDateValues } = props;
  const [eventFormOptions, setEventFormOptions] = useState({
    farmHands: ["Colten", "Cooper", "Daniel"],
    species: ["Pigs", "Horses", "Dogs"],
    chores: ["Feeding/Watering", "Walk/Exercise"],
  });
  const defaultDateValue = () => {
    let { year, month, day } = splitDateValues(new Date(Date.now()));
    month++;
    if (month < 10) month = `0${month}`;
    return `${year}-${month}-${day}T07:00`;
  };

  return (
    <div className="newEventForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="day">Date</label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          defaultValue={defaultDateValue()}
        />{" "}
        {/* default to today */}
        <label htmlFor="farmHand">Farm Hand</label>
        <select name="farmHand" id="farmHand">
          {eventFormOptions.farmHands.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        <label htmlFor="chore">Chore</label>
        <select name="chore" id="chore">
          {eventFormOptions.chores.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        <label htmlFor="species">Species</label>
        <select name="species" id="species">
          {eventFormOptions.species.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        <div className="actions">
          <input type="reset" value="Reset Form" />
          <input name="submit" type="submit" />
        </div>
      </form>
    </div>
  );
}
