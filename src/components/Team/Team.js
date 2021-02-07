import React from 'react';
import Image from 'next/image';
import { withStyles } from '@material-ui/core/styles';
import styles from './TeamStyles';

import { team } from './TeamData';

function Team(props) {
  const { classes } = props;
  const html = team.cat.map((p) => (
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
        <h3 className={classes.name}>{p.firstName}</h3>
        <p className={classes.title}>{p.title}</p>
      </div>
    </div>
  ));

  return (
    <section className={classes.root}>
      <h2 className={classes.sectionTitle}>El nostre Equip: </h2>
      <div className={classes.sectionContainer}>{html}</div>
    </section>
  );
}

export default withStyles(styles)(Team);
