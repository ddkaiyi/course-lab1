import React from "react";
import Event from "./Event";
const Calendar=()=>{
    return(
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
                   
                    {/* <td className="time">Insert Time</td> */}
                    <tr >
                    <td className="time">8 am</td>
                    <Event event='Fancy Dinner 🎩' location='Maple & Ash' color ='green'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' color ='green'/>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">9 am</td>
                    <Event event='Subway 🚊' color ='pink'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color ='blue'/>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">10 am</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">11 am</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">12 am</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Art  🫘' color ='green'/>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">1 pm</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">2 pm</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">3 pm</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='red 🫘' location='Maple & Ash' color ='pink'/>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">4 pm</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr >
                    <td className="time">5 pm</td>
                    <Event/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
                </table>


        </div>
    )
}
export default Calendar;