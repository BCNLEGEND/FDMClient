import React, { useContext } from 'react';
import Calendar from '../src/components/Calendar/CalendarFull';
import Footer from '../src/components/Footer/Footer';

import { LanguageContext } from '../src/context/language';
import { months } from '../src/utils/months';
import { calendarDates } from '../src/utils/Guardies';
import { WEEKDAYS_LONG } from '../src/utils/localeCA';

import styles from '../styles/Emergencies.module.css';

export default function emergencies() {
  const { language } = useContext(LanguageContext);
  const now = new Date();
  const currentMonth = months[language][now.getMonth()];
  return (
    <main className={styles.root}>
      <h1 className={styles.primaryHeading}>Calendari de Guàrdies:</h1>
      <p className={styles.paragraph}>
        A la Farmàcia del Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí,
        el nostre principal objectiu és estar{' '}
        <span className={styles.span}>"Sempre a prop teu"</span>
      </p>
      <h2
        className={styles.secondaryHeading}
      >{`${currentMonth} ${now.getFullYear()}`}</h2>
      <p className={styles.paragraph}>
        La Farmàcia del Mar està dins la roda de torns de Guàrdies d’Arenys de
        Mar. Durant el mes de {currentMonth} ens pertoquen els següents dies de
        Guàrdies:
      </p>
      <ul>
        {calendarDates.map(
          (date) =>
            date.getMonth() === now.getMonth() && (
              <li className={styles.listItem} key={date.getTime()}>{`${
                WEEKDAYS_LONG[date.getDay()]
              } ${date.getDate()} ${currentMonth} ${now.getFullYear()}`}</li>
            )
        )}
      </ul>

      <Calendar />
    </main>
  );
}
