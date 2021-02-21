import React, { useContext } from 'react';
import Calendar from '../Calendar/CalendarFull';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';

import { LanguageContext } from '../../context/language';
import { calendarDates } from '../../utils/Guardies';

import useStyles from './EmergenciesPageStyles';
import text from '../Calendar/CalendarText';

function EmergenciesPage(props) {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const now = new Date();
  const currentMonth = text[language].MONTHS[now.getMonth()];
  return (
    <section className={classes.root}>
      <Typography
        variant="h5"
        component="h1"
        className={classes.primaryHeading}
      >
        Calendari de Guàrdies:
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        A la Farmàcia del Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí,
        el nostre principal objectiu és estar{' '}
        <span className={classes.span}>"Sempre a prop teu"</span>
      </Typography>
      <div className={classes.img}>
        <Image src="/media/img/guardia01.png" width={600} height={180} />
      </div>
      <Typography
        variant="h5"
        component="h2"
        className={classes.secondaryHeading}
      >
        {`${currentMonth} ${now.getFullYear()}`}
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        La Farmàcia del Mar està dins la roda de torns de Guàrdies d’Arenys de
        Mar. Durant el mes de {currentMonth} ens pertoquen els següents dies de
        Guàrdies:
      </Typography>
      <ul>
        {calendarDates.map(
          (date) =>
            date.getMonth() === now.getMonth() && (
              <Typography
                variant="body2"
                className={classes.listItem}
                key={date.getTime()}
              >{`${
                text[language].WEEKDAYS_LONG[date.getDay()]
              } ${date.getDate()} ${currentMonth} ${now.getFullYear()}`}</Typography>
            )
        )}
      </ul>

      <Calendar />
    </section>
  );
}

export default EmergenciesPage;
