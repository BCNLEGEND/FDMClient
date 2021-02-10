import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import text from './ServiceMenuText';

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
    width: '90%',
    margin: 'var(--size-m) auto',
  },
  title: {
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-xs)',
  },
  tabContainer: {
    marginTop: 'var(--size-xs)',
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    height: 288,
    color: 'var(--primary-color)',
    fontFamily: 'var(--primary-font) !important',
  },
  text: {
    width: '70%',
    textAlign: 'justify',
  },
}));

export default function ServiceTabs() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{text[language].title}</h2>
      <div className={classes.tabContainer}>
        <Tabs
          orientation="vertical"
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
        <TabPanel value={value} index={0} className={classes.text}>
          {text[language].fito.text}
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.text}>
          {text[language].olis.text}
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.text}>
          {text[language].flors.text}
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.text}>
          {text[language].suplements.text}
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.text}>
          {text[language].consells.text}
        </TabPanel>
      </div>
    </div>
  );
}
