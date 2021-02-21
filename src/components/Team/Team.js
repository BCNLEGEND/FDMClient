import React, { useContext } from 'react';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import useStyles from './TeamStyles';

import { LanguageContext } from '../../context/language';

import { team, text } from './TeamData';

function Team() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);

  const html = team.map((p) => (
    <div key={p.id} className={classes.container}>
      <div className={classes.imgContainer}>
        <Image
          src={`/media/img/${p.img}`}
          width={100}
          height={100}
          layout="responsive"
          alt={`${p.firstName} ${p.lastName}`}
        />
      </div>
      <div className={classes.nameContainer}>
        <Typography variant="h5" component="h3" className={classes.name}>
          {p.firstName}
        </Typography>
        <Typography variant="subtitle2" className={classes.title}>
          {p.title[language]}
        </Typography>
      </div>
    </div>
  ));

  return (
    <section className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.sectionTitle}>
        {text[language]}
      </Typography>
      <Typography variant="h5" component="h3" className={classes.aprop}>
        Sempre a prop teu
      </Typography>
      <div className={classes.sectionContainer}>{html}</div>
    </section>
  );
}

export default Team;
