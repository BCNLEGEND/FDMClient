import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './FooterStyles';

function FooterContent(props) {
  const { classes } = props;
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <svg className={classes.icon}>
          <use href="/media/svg/sprite.svg#icon-address" />
        </svg>
        <div className={classes.text}>
          C. d'Avall 18, <br />
          08350 Arenys de Mar,
          <br />
          Barcelona
        </div>
      </div>
      <div className={classes.container}>
        <svg className={classes.icon}>
          <use href="/media/svg/sprite.svg#icon-phone" />
        </svg>
        <div className={classes.text}>+34 937 92 14 71</div>
      </div>
      <div className={classes.container}>
        <svg className={classes.icon}>
          <use href="/media/svg/sprite.svg#icon-whatsapp" />
        </svg>
        <div className={classes.text}>+34 686 02 35 19</div>
      </div>
      <div className={classes.container}>
        <svg className={classes.icon}>
          <use href="/media/svg/sprite.svg#icon-alternate_email" />
        </svg>
        <div className={classes.text}>salut@farmaciadelmar.com</div>
      </div>
      <div className={classes.container}>
        <svg className={classes.icon}>
          <use href="/media/svg/sprite.svg#icon-access_time" />
        </svg>
        <div className={classes.text}>dll a ds: 9:00 h - 21:00 h</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(FooterContent);
