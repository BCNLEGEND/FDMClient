import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import { data } from './AdditionalPharmaciesData';
import useStyles from './EmergenciesPageStyles';

export default function AdditionalPharmacies() {
  const classes = useStyles();

  const html = [];

  for (const v in data) {
    html.push(
      <Card key={data[v].id} className={classes.card}>
        <CardContent>
          <Typography variant="h5">{data[v].name}</Typography>
          <Typography variant="body1">{data[v].address}</Typography>
          <Typography variant="body1">{data[v].tel}</Typography>
        </CardContent>
        {data[v].link ? (
          <CardActions>
            <IconButton href={data[v].link}>
              <LanguageIcon className={classes.icon} />
            </IconButton>
          </CardActions>
        ) : (
          ''
        )}
      </Card>
    );
  }

  return (
    <section>
      <Typography variant="h4" component="h3" className={classes.title}>
        Farmàcies d'Arenys de Mar:
      </Typography>
      <div className={classes.cardContainer}>{html}</div>
    </section>
  );
}
