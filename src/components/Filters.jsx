import React, { useState } from "react";

const Filters = ({events}) => {
    const [mounth, setMounth] = useState( ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
    return (
        <div className="Filters">
            <p className="filterName">City</p>
            <div className="droppedFilter">
                {events.map((event) =>
                    <li className="droppesItem">{event.city}</li>
                )}
            </div>
            <p className="filterName">Month</p>
            <div className="droppedFilter">
                {mounth.map((mounth) => 
                    <li className="droppesItem">{mounth}</li>
                )}  
            </div>
        </div>
    )
}

export default Filters;