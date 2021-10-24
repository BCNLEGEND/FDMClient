import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import useStyles from './CalendarStyles';

import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '@/utils/localeCA';
import { calendarDates } from '@/utils/Guardies';

export default function GuardiesCalendar(props) {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
    guardies: calendarDates,
  };
  const modifiersStyles = {
    guardies: {
      color: 'white',
      backgroundColor: 'var(--primary-color)',
    },
    sundays: {
      color: 'var(--secondary-color)',
      backgroundColor: 'white',
    },
  };
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h3 className={classes.heading}>Estem de Guàrdia</h3>
      <DayPicker
        disabledDays={{ daysOfWeek: [0] }}
        initialMonth={new Date()}
        selectedDays={calendarDates}
        firstDayOfWeek={1}
        showOutsideDays={true}
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        numberOfMonths={3}
      />
    </section>
  );
}
