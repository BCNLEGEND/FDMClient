import React, { useContext } from 'react';

import Image from 'next/image';

import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

import { useMediaQuery } from '@/utils/useMediaQuery';
import { bp } from '@/utils/breakpoints';

import text from './ServiceMenuText';

import useStyles from './ServicesMenuStyles';

import { LanguageContext } from '@/context/language';

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
          <div>{children}</div>
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
      <Typography variant="h5" component="h2" className={classes.title}>
        {text[language].title}
      </Typography>
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
            <div className={classes.textContainer}>
              <Typography variant="body1">
                {text[language].fito.text}
              </Typography>
              {isBreakPoint ? (
                <div className={classes.img}>
                  <Image
                    src={`/media/img/${text[language].fito.img}`}
                    layout="responsive"
                    alt={text[language].fito.title}
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
            <Typography variant="body1">{text[language].olis.text}</Typography>
            {isBreakPoint ? (
              <div className={classes.img}>
                <Image
                  src={`/media/img/${text[language].olis.img}`}
                  alt={text[language].olis.title}
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
            ) : (
              ''
            )}
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.text}>
            <Typography variant="body1">{text[language].flors.text}</Typography>
            {isBreakPoint ? (
              <div className={classes.img}>
                <Image
                  src={`/media/img/${text[language].flors.img}`}
                  alt={text[language].flors.title}
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
            ) : (
              ''
            )}
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.text}>
            <Typography variant="body1">
              {text[language].suplements.text}
            </Typography>
            {isBreakPoint ? (
              <div className={classes.img}>
                <Image
                  src={`/media/img/${text[language].suplements.img}`}
                  alt={text[language].suplements.title}
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
            ) : (
              ''
            )}
          </TabPanel>
          <TabPanel value={value} index={4} className={classes.text}>
            <Typography variant="body1">
              {text[language].consells.text}
            </Typography>
            <List className={classes.list}>
              {text[language].consells.bullets.map((el, i) => (
                <ListItem key={i} className={classes.listItem}>
                  <Typography variant="body1">{el}</Typography>
                </ListItem>
              ))}
            </List>
            {isBreakPoint ? (
              <div className={classes.img}>
                <Image
                  src={`/media/img/${text[language].consells.img}`}
                  alt={text[language].consells.title}
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
            ) : (
              ''
            )}
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
