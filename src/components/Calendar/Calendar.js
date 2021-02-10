import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { withStyles } from '@material-ui/core/styles';
import styles from './CalendarStyles';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../utils/localeCA';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { bp } from '../../utils/breakpoints';

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
  const { classes } = props;
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
      <h3 className={classes.heading}>Estem de Guardià</h3>
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
        numberOfMonths={months}
        className={classes.calendar}
      />
    </section>
  );
}

export default withStyles(styles)(GuardiesCalendar);
