import React from 'react';

import './styles/Calendar.css';

import Event from './Event';

class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ],
        };
    }
    

    isMonth = (v) => {
        return v.dateStart.getMonth() <= this.props.month && v.dateEnd.getMonth() >= this.props.month;
    }

    filterEvents = (currentDay) => {

        console.log('currentday:' +currentDay);
        let filteredEvents = this.props.events.filter(this.isMonth);
        return filteredEvents.filter(v => v.dateStart.getDate() <= currentDay && v.dateEnd.getDate() >= currentDay);
    }

    
    createGrid = () => {
        let grid = [];
        let daysInMonth = new Date(this.props.year, this.props.month+1, 0).getDate();
        let monthStart = new Date(this.props.year, this.props.month, 1).getDay();

        for(let i = 1; i <= daysInMonth; i++){
            let todayEvents = this.filterEvents(i);
            if(i === 1){
                if(todayEvents){
                    grid.push(<div className='dayBlock' style = {{gridColumn: monthStart+1,}}>{i}{
                        todayEvents.map(event=>(
                            <Event name={event.name} timeStart={event.dateStart} timeEnd={event.dateEnd} />
                        ))
                    }</div>
                    )
                }else{
                    grid.push(<div className='dayBlock' style = {{gridColumn: monthStart,}}>{i}</div>)
                }
            }else{
                if(todayEvents){
                    grid.push(
                        <div className='dayBlock'>{i}
                            {
                                todayEvents.map(event=>(
                        <Event name={event.name} timeStart={event.dateStart} timeEnd={event.dateEnd} />
                    ))
                            }
                        </div>
                    )
                    
                }else{
                    grid.push(<div div className='dayBlock'>{i}</div>)
                }
            }
        }

        return grid;
    }
    
    render(){
        return (
            <div className='calendar'>
            <h2><span className='calendar__button' onClick={this.props.prevMonth}> - </span> {this.state.monthNames[this.props.month]} <span className='calendar__button' onClick={this.props.nextMonth}> + </span></h2>
            <h3>{this.props.year}</h3> 
                <div className="day-of-week">
                    <div>Su</div>
                    <div>Mo</div>
                    <div>Tu</div>
                    <div>We</div>
                    <div>Th</div>
                    <div>Fr</div>
                    <div>Sa</div>
                </div>
    
                <div className="date-grid">
                    {
                        this.createGrid()
                    }
                </div>
            </div>
        );
    }
    
}

export default Calendar;