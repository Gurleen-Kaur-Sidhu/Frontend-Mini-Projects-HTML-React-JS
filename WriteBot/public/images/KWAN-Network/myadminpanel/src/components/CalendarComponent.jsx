
import React from 'react'
import './CalendarComponent.css'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from './header/Header';



const CalendarComponent = () => {
  return (
    <div>
      <Header></Header>
         <div className='title'>
        <h1>Calendar</h1>
        <nav>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/' >
                <i class="bi bi-house" id='icon'></i></a>
            </li>
            <li className='breadcrumb-item active'>Calendar</li>
          </ol>
        </nav>

      </div>  

    <div class="calendar-section">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", 
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"75vh"}
        />
    </div>
    </div>
  )
}
export default CalendarComponent

