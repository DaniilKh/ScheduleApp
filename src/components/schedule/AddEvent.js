import React from 'react';

import './styles/AddEvent.css'

class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            dateStart: new Date(),
            dateEnd: new Date(),
        }
    }

    handleInput = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    parseDate = (e) => { //перенести обработку стейтов в handleInput
        const target = e.target;
        const value = target.value;
        const name = target.name;
        var s = value.split(/\D+/);
        let date = new Date(s[0], --s[1], s[2], s[3], s[4], s[5]||0, s[6]||0);

        this.setState ({
            [name]: date,
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.createEvent();
        this.props.closeModal();
    }

    createEvent = () => { // add check for used dates?
        let newEvent = {name: this.state.eventName, dateStart: this.state.dateStart, dateEnd: this.state.dateEnd}; // add id field
        this.props.addEvent(newEvent);
    }

    render() {
        return (
            <div className='addEvent__overlay' id='modal'>
                        <div className='addEvent__popup'>
                            <h2>Add new event</h2>
                            <form id='addEvent__form' onSubmit={this.submitHandler}>
                                <input 
                                    name='eventName'
                                    type="text" 
                                    placeholder="Event name"
                                    onChange={this.handleInput}
                                />
                                <br/>
                                <label>Starts: 
                                    <input 
                                        type="datetime-local" 
                                        name='dateStart'
                                        onChange={this.parseDate}
                                    />
                                </label><br/>
                                <label>Ends: 
                                    <input 
                                        type="datetime-local" 
                                        name='dateEnd'
                                        onChange={this.parseDate}
                                    />
                                </label>
                                <br/>
                                <input type='submit' value='Add Event'/>
                            </form>
                            
                            <a href='#root' className='addEvent__form--close' onClick={this.props.closeModal}>&times;</a>
                        </div>
                    </div>
            
        )
    }
    
}

export default AddEvent;