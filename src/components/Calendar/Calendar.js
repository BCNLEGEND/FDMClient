import React, { useContext } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import Typography from '@material-ui/core/Typography';
import useStyles from './CalendarStyles';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { bp } from '../../utils/breakpoints';
import text from './CalendarText';

import { LanguageContext } from '../../context/language';
import { calendarDates } from '../../utils/Guardies';

function GuardiesCalendar(props) {
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
  const { language } = useContext(LanguageContext);
  const isBreakpointMd = useMediaQuery(bp.md);
  const isBreakpointLg = useMediaQuery(bp.lg);
  const numOfMonths = () => {
    if (isBreakpointLg) return 3;
    if (isBreakpointMd) return 2;
    return 1;
  };

  const months = numOfMonths();

  return (
    <section className={classes.root}>
      <Typography variant="h4" component="h3" className={classes.heading}>
        {text[language].title}
      </Typography>
      <DayPicker
        disabledDays={{ daysOfWeek: [0] }}
        initialMonth={new Date()}
        selectedDays={calendarDates}
        firstDayOfWeek={1}
        showOutsideDays={true}
        months={text[language].MONTHS}
        weekdaysLong={text[language].WEEKDAYS_LONG}
        weekdaysShort={text[language].WEEKDAYS_SHORT}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        numberOfMonths={months}
        className={classes.calendar}
      />
    </section>
  );
}

export default GuardiesCalendar;
