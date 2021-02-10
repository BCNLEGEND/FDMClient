import React, { useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import { bp } from '../../../utils/breakpoints';
import text from './ServiceMenuText';
import sizes from '../../../utils/mediaSizes';

import { LanguageContext } from '../../../context/language';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    margin: 'auto auto',
    [sizes.up('lg')]: {
      width: '96%',
    },
    [sizes.up('xl')]: {
      width: '70%',
    },
  },

  tabs: {
    width: 'auto',
    // flexGrow: 1,
  },
  title: {
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-xs)',
    alignSelf: 'flex-start',
  },
  tabContainer: {
    margin: 'var(--size-xs)',
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    color: 'var(--primary-color)',
    fontFamily: 'var(--primary-font) !important',
    [sizes.up('lg')]: {
      flexDirection: 'column',
    },
  },
  text: {
    width: '100%',
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('lg')]: {
      width: '90%',
      margin: 'auto',
    },
  },
  img: {
    marginTop: 'var(--size-s)',
    width: '50%',
    borderRadius: 'var(--size-xxs)',
    overflow: 'hidden',
  },
  '.MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
  tabPanelContainer: {
    width: '100%',
  },
}));

export default function ServiceTabs() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const [value, setValue] = React.useState(0);
  const isBreakPoint = useMediaQuery(bp.lg);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{text[language].title}</h2>
      <div className={classes.tabContainer}>
        <Tabs
          orientation={isBreakPoint ? 'horizontal' : 'vertical'}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Service tabs menu"
          textColor="inherit"
          className={classes.tabs}
        >
          <Tab label={text[language].fito.title} {...a11yProps(0)} />
          <Tab label={text[language].olis.title} {...a11yProps(1)} />
          <Tab label={text[language].flors.title} {...a11yProps(2)} />
          <Tab label={text[language].suplements.title} {...a11yProps(3)} />
          <Tab label={text[language].consells.title} {...a11yProps(4)} />
        </Tabs>
        <div className={classes.tabPanelContainer}>
          <TabPanel value={value} index={0} className={classes.text}>
            <div className={classes.text}>
              <p>{text[language].fito.text}</p>
              {isBreakPoint ? (
                <div className={classes.img}>
                  <Image
                    src={`/media/img/${text[language].fito.img}`}
                    layout="responsive"
                    width={400}
                    height={300}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.text}>
            <div className={classes.text}>
              <p>{text[language].olis.text}</p>
              {isBreakPoint ? (
                <div className={classes.img}>
                  <Image
                    src={`/media/img/${text[language].olis.img}`}
                    layout="responsive"
                    width={400}
                    height={300}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.text}>
            <div className={classes.text}>
              <p>{text[language].flors.text}</p>
              {isBreakPoint ? (
                <div className={classes.img}>
                  <Image
                    src={`/media/img/${text[language].flors.img}`}
                    layout="responsive"
                    width={400}
                    height={300}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.text}>
            <div className={classes.text}>
              <p>{text[language].suplements.text}</p>
              {isBreakPoint ? (
                <div className={classes.img}>
                  <Image
                    src={`/media/img/${text[language].suplements.img}`}
                    layout="responsive"
                    width={400}
                    height={300}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
          <TabPanel value={value} index={4} className={classes.text}>
            <div className={classes.text}>
              <p>{text[language].consells.text}</p>
              {isBreakPoint ? (
                <div className={classes.img}>
                  <Image
                    src={`/media/img/${text[language].consells.img}`}
                    layout="responsive"
                    width={400}
                    height={300}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
