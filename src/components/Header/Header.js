// React Imports
import { useContext } from 'react';
// Nextjs Imports
import Image from 'next/image';
// Media quesries Imports
import { useMediaQuery } from '@/utils/useMediaQuery';
import { bp } from '@/utils/breakpoints';
// Styling imports
import useStyles from './HeaderStyles';
// Material UI Imports
import MouseIcon from '@material-ui/icons/Mouse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typewriter from '../Typewriter/Typewriter';
// Context Imports
import { LanguageContext } from '@/context/language';
// Text Imports
import text from './HeaderText';

function header() {
  const { language } = useContext(LanguageContext);
  const classes = useStyles();
  const isBreakPoint = useMediaQuery(bp.lg);
  const isBreakPointXl = useMediaQuery(bp.xl);
  return (
    <header className={classes.header}>
      {!isBreakPoint ? (
        <div className={classes.background}>
          <Image
            layout="responsive"
            objectFit="contain"
            width="100"
            height="67"
            src="/media/img/FDM_header_01.png"
            alt="Farmàcia del Mar foto"
            className={classes.image}
            priority="true"
          />
        </div>
      ) : (
        <>
          <div className={classes.background}>
            <video
              className={classes.bgVideo__content}
              autoPlay
              loop
              muted
              width="100%"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-sea-waves-hitting-the-sandy-seashore-1953-large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {isBreakPointXl ? (
            <div className={classes.iconContainer}>
              <MouseIcon className={classes.iconMouse} />
              <KeyboardArrowDownIcon className={classes.iconArrow} />
              <KeyboardArrowDownIcon className={classes.iconArrowII} />
            </div>
          ) : (
            ''
          )}
        </>
      )}
      <div className={classes.headingContainer}>
        <h1>
          <span className={classes.primaryHeading}>Farmàcia del Mar</span>
          <span className={classes.secondaryHeading}>
            {text[language].subtitle}
          </span>
          <Typewriter />
        </h1>
      </div>
    </header>
  );
}

export default header;
