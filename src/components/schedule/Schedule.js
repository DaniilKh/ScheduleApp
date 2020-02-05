import React from 'react';

import './styles/Schedule.css';

import AddEvent from './AddEvent';
import Calendar from './Calendar';

class Schedule extends React.Component {

    constructor(){
        super();
        this.state = {
            bShowModal: false, // show modal with AddEvent Form?
            events: [],
            monthToShow: new Date().getMonth(),
            yearToShow: new Date().getYear()+1900,
        }
    }

    addEventToSchedule = (event) => {
        this.setState(prevState => {
            return {
                events: [
                    ...prevState.events,
                    event
                ]
            }
        } 
            )
    }

    nextMonth = () => {
        this.setState(prevState => {
            return {monthToShow: prevState.monthToShow + 1}
        })
    }

    prevMonth = () => {
        this.setState(prevState => {
            return {monthToShow: prevState.monthToShow - 1}
        })
    }

    switchModal = () => { 
        let bSwitch = this.state.bShowModal;
        bSwitch = !bSwitch;
        this.setState(
            {
                bShowModal: bSwitch
            }
        )
    }

    render () {
        
        console.log(this.state.events);
        return (
            <div>
                <div>
                    <Calendar year={this.state.yearToShow} month={this.state.monthToShow} events={this.state.events} nextMonth={this.nextMonth} prevMonth={this.prevMonth}/>
                </div>
                {this.state.bShowModal && <AddEvent closeModal={this.switchModal} addEvent={this.addEventToSchedule}/>}
                <button className='addEvent__button' onClick={this.switchModal}>+</button>
            </div>
        )
    }
}

export default Schedule;