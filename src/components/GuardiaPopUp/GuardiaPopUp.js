import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './GuardiaPopUpStyles';
import { calendarDates } from '../../utils/Guardies';

function GuardiaPopUp(props) {
  const { classes } = props;
  const today = new Date().toDateString();
  let yesterday = new Date(today);
  yesterday = yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = new Date(yesterday).toDateString();
  const allGuardias = calendarDates.map((date) =>
    new Date(date).toDateString()
  );
  const isGuardia =
    (allGuardias.includes(today) && new Date().getHours() > 9) ||
    (allGuardias.includes(yesterdayString) && new Date().getHours() < 9);
  return (
    <div className={isGuardia ? `${classes.root}` : `${classes.hidden}`}>
      <div className={classes.container}>
        <h2 className={classes.heading}>🚨🚨 Estem de Guardìa 🚨🚨</h2>
        <div className={classes.text}>
          <svg className={classes.icon}>
            <use href="/media/svg/sprite.svg#icon-phone" />
          </svg>
          <p> +34 93 79 21 471</p>
        </div>
        <div className={classes.text}>
          <a href="https://wa.me/34686023519">
            <svg className={classes.icon}>
              <use href="/media/svg/sprite.svg#icon-whatsapp" />
            </svg>
          </a>
          <a className={classes.text} href="https://wa.me/34686023519">
            +34 686 02 35 19
          </a>
        </div>
        <div className={classes.text}>
          <svg className={classes.icon}>
            <use href="/media/svg/sprite.svg#icon-address" />
          </svg>
          <p>C. d'Avall 18, 08350 Arenys de Mar</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(GuardiaPopUp);
