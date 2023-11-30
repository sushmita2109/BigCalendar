import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dayjsLocalizer(dayjs);

const myEventsList = [
  {
    title: "All Day 1 hour Coding",
    allDay: true,
    start: new Date(2023, 10, 30),
    end: new Date(2023, 11, 31),
  },
  {
    title: "Vaction",

    start: new Date(2023, 11, 17),
    end: new Date(2023, 11, 22),
  },
  {},
  {},
];

export const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{
        height: 500,
      }}
    />
  </div>
);
