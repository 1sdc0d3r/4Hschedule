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
        {/* <label htmlFor="day">  */}
        {/* Date */}
        <input
          type="datetime-local"
          name="date"
          id="date"
          defaultValue={defaultDateValue()}
        />{" "}
        {/* </label>
        {/* default to today */}
        {/* <label htmlFor="farmHand"> */}
        {/* Farm Hand */}
        <select name="farmHand" id="farmHand" defaultValue="farmhand">
          <option value="farmhand" disabled>
            Farmhand
          </option>
          {eventFormOptions.farmHands.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        {/* </label> */}
        {/* <label htmlFor="chore"> */}
        {/* Chore */}
        <select name="chore" id="chore" defaultValue="chore">
          <option value="chore" disabled>
            Chores
          </option>
          {eventFormOptions.chores.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        {/* </label> */}
        {/* <label htmlFor="species"> */}
        {/* Species */}
        <select name="species" id="species" defaultValue="species">
          <option value="species" disabled>
            Species
          </option>
          {eventFormOptions.species.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        {/* </label> */}
        <div className="actions">
          <input type="reset" value="Reset Form" />
          <input name="submit" type="submit" />
        </div>
      </form>
    </div>
  );
}
