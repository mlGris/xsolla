import React from "react";

const BodyEvents = ({events}) => {
    return (
        <div className="BodyEvents">
            {events.map((event) =>
                <div className="event">
                    <time className="cardDate" dateTime={event.date.slice(0,2)}></time>
                    <button className="favorite"></button>
                    <h2 className="nameEvent">{event.name}</h2>
               </div>         
            )}
        </div>
    )
}

export default BodyEvents;