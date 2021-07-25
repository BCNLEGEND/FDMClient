import { useContext } from 'react';
import Calendar from '../Calendar/CalendarFull';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import AdditionalPharmacies from './AdditionalPharmacies';
import { LanguageContext } from '@/context/language';
import { calendarDates } from '@/utils/Guardies';

import useStyles from './EmergenciesPageStyles';
import text from '../Calendar/CalendarText';
import { pageText } from './EmergenciesPageText';
import { text as title } from '../Header/HeaderText';

function EmergenciesPage(props) {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const now = new Date();
  const currentMonth = text[language].MONTHS[now.getMonth()];
  return (
    <section className={classes.root}>
      <Typography
        variant="h3"
        component="h1"
        className={classes.primaryHeading}
      >
        {pageText[language].title}
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        {pageText[language].subTitle}
        <Typography variant="h5" component="h2" className={classes.span}>
          {`"${title[language].subtitle}"`}
        </Typography>
      </Typography>
      <div className={classes.img}>
        <Image src="/media/img/guardia01.png" width={600} height={180} />
      </div>
      <Typography
        variant="h4"
        component="h3"
        className={classes.secondaryHeading}
      >
        {`${currentMonth} ${now.getFullYear()}`}
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        {pageText[language].text01} {currentMonth} {pageText[language].text02}
      </Typography>
      <ul>
        {calendarDates.map(
          (date) =>
            date.getMonth() === now.getMonth() && (
              <Typography
                variant="body1"
                className={classes.listItem}
                key={date.getTime()}
              >{`${
                text[language].WEEKDAYS_LONG[date.getDay()]
              } ${date.getDate()} ${currentMonth} ${now.getFullYear()}`}</Typography>
            )
        )}
      </ul>

      <Calendar />
      <AdditionalPharmacies />
    </section>
  );
}

export default EmergenciesPage;
