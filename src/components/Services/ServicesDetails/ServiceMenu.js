import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    flexGrow: 1,
    display: 'flex',
    height: 288,
    color: 'var(--primary-color)',
    fontFamily: 'var(--primary-font) !important',
  },
  //   tabs: {
  //     // borderRight: '.2px solid var(--primary-color-light)',
  //   },
  text: {
    width: '70%',
    textAlign: 'justify',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Service tabs menu"
        textColor="inherit"
        className={classes.tabs}
      >
        <Tab label="Fitoteràpia" {...a11yProps(0)} />
        <Tab label="Olis essencials" {...a11yProps(1)} />
        <Tab label="Flors de Bach" {...a11yProps(2)} />
        <Tab label="Suplements" {...a11yProps(3)} />
        <Tab label="Consells" {...a11yProps(4)} />
        <Tab label="Serveis Basics" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.text}>
        Lús de la poderosa qualitat curativa de la fitoteràpia, és avui en dia
        un dels camins per millorar la salut de forma natural i efectiva.
        Preparem les barrejas de plantes adequades i personalitzades, per a
        estabilitzar els nivells de sucre, colesterol, triglicèrids , tensió
        arteriaL, desintoxicar el teu cos , etc..... El rigor i constancia de la
        persona juntament amb el compromís i seguiment per part nostra, comparta
        aconseguir els objectius.
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.text}>
        Concentrats d’origen vegetal que s’extreuen de certes plantes, arrels,
        fulles, arbres, ...mitjançant les tècniques de vapor, premsat, …,per
        adquirir les propietats específiques naturals. Dins la Aromaterapia els
        olis son utilitzats amb la finalitat terapèutica, i s’utilitzen diluïts
        en altres elements, com olis, aigua, etc… Aconsellem a les persones que
        volen un tractament natural el Oli Essencial apropiat, com bactericida,
        antibiòtic natural, antiinflamatori, relaxant, antisèptic, regenerador
        cel·lular, tonificant, etc…
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.text}>
        Les essències naturals de flors utilitzades per tractar diversos
        sintomes i situacions emocionals que afecten al ser Humà , fa que
        millori el estat vibracional de la persona.Previa consulta amb
        profunditat per explaiar el vostre malestar, elaborem adecuadament les
        flors , per aconseguir millorar la por, soledat, estrés, concentració,
        depressió, obsessions, energía, . ... etc.
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.text}>
        Sent fidels i conseqüents a la nostra filosofia de que ens considerem
        una Farmàcia Integrativa, i que tractem la salut de manera global,
        aconsellem qualsevol tractament dels exposats i també tots el Suplements
        Nutricionals Naturals que fagin falta, sempre respectan els desitjos de
        la nostre clientela. Millorar de forma natural el colesterol,
        hipertensió, manca de vitamines, postoperatorios, osteopatía, sucre,
        tremolor essencial, etc…, sha eviten molts efectes colaterals a llarg
        termini.
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.text}>
        Sempre donem el millor consell de qualsevol teràpia anterior i també del
        consell dietètic i nutricional, que complementats , ajuden i acompanyen
        a millorar la teva salut, amb un projecte de vida per aconseguir que et
        sentis bé amb el teu cos, la teva ment, i el teu entorn. Totes les
        terapies integratives que apliquem van focalitzades per aconseguir estar
        “sempre a prop teu” i obtenir : + salut, +benestar, +comfort emocional,
        per ser +feliç.
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum
        illum necessitatibus minima architecto blanditiis id accusantium
        eligendi maiores iure quod eum magni, ex nesciunt autem soluta? Quaerat,
        ut qui. Quam reprehenderit laboriosam, accusamus placeat porro
        perferendis adipisci, vitae molestias mollitia, quas asperiores debitis.
        Sapiente doloremque eveniet, sequi asperiores, debitis dolore suscipit
        saepe animi quam doloribus culpa architecto inventore aspernatur.
        nesciunt dolor!
      </TabPanel>
    </div>
  );
}
