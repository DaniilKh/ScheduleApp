import React from 'react';


//оч мусорно.
const Event = (props) => {
    let begin = props.timeStart;
    let end = props.timeEnd;
    let name = props.name;
        return (
            <div className="eventList__item">
                <h4><b>{name}:</b></h4>
                <p className='eventList__item__time'>
                {begin.getHours() < 10 ? '0' : ''}{begin.getHours()}
                :
                {begin.getMinutes() < 10 ? '0' : '' }{begin.getMinutes()}
                 - 
                {end.getHours() < 10 ? '0' : ''}{end.getHours()}
                :
                {end.getMinutes() < 10 ? '0' : '' }{end.getMinutes()}
                </p>
            </div>
        );
}

export default Event;

