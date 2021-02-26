import React from 'react';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Divider from '@material-ui/core/Divider';
import useStyles from './FooterStyles';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { bp } from '../../utils/breakpoints';
import FooterMap from '../Map/FooterMap';

function FooterContent() {
  const isBreakpoint = useMediaQuery(bp.md);
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.address}>
        <div className={classes.container}>
          <svg className={classes.icon}>
            <use href="/media/svg/sprite.svg#icon-address" />
          </svg>
          <Typography variant="body1" className={classes.text}>
            C. d'Avall 18, <br />
            08350 Arenys de Mar,
            <br />
            Barcelona
          </Typography>
        </div>
        <div className={classes.container}>
          <svg className={classes.icon}>
            <use href="/media/svg/sprite.svg#icon-phone" />
          </svg>
          <Typography variant="body1" className={classes.text}>
            +34 93 792 14 71
          </Typography>
        </div>
        <div className={classes.container}>
          <svg className={classes.icon}>
            <use href="/media/svg/sprite.svg#icon-whatsapp" />
          </svg>
          <Typography variant="body1" className={classes.text}>
            <a className={classes.text} href="https://wa.me/34686023519">
              +34 68 602 35 19
            </a>
          </Typography>
        </div>
        <div className={classes.container}>
          <svg className={classes.icon}>
            <use href="/media/svg/sprite.svg#icon-alternate_email" />
          </svg>
          <Typography variant="body1" className={classes.text}>
            salut@farmaciadelmar.com
          </Typography>
        </div>
        <div className={classes.container}>
          <svg className={classes.icon2}>
            <use href="/media/svg/sprite.svg#icon-access_time" />
          </svg>
          <Typography variant="body1" className={classes.text2}>
            dll a ds: 9:00 h - 21:00 h
          </Typography>
        </div>
        <div className={classes.containerSocial}>
          <a
            href="https://www.facebook.com/FarmaciadelmarArenys/"
            aria-label="Facebook"
          >
            <FacebookIcon className={classes.iconSocial} />
          </a>
          <a
            href="https://www.instagram.com/farmaciadelmar/"
            aria-label="Instagram"
          >
            <InstagramIcon className={classes.iconSocial} />
          </a>
        </div>
      </div>
      {isBreakpoint ? (
        <div className={classes.map}>
          <FooterMap />{' '}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default FooterContent;
