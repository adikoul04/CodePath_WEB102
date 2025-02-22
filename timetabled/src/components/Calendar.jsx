import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Fancy Dinner 🎩' color ='orange'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Workout' color ='red'/>
                        <td></td>
                        <td></td>
                        <Event event='Fun' color ='pink'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Breakfast' color ='yellow'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Brunch' color ='pink'/>
                        <td></td>
                        <Event event='Surfing' color ='blue'/>
                        <Event event='Yolk 🍳' color ='red'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='yellow'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='Gaming' color ='orange'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Class' color ='blue'/>
                        <Event event='Yolk 🍳' color ='yellow'/>
                        <td></td>
                        <Event event='Class 2' color ='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Class' color ='red'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lawn Mowing' color ='green'/>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <Event event='Ice Skating' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='yellow'/>
                    </tr>
                </tbody>    
            </table>
        </div>
    )
}

export default Calendar;