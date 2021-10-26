import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';
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
            <IconButton href={data[v].link} size="large">
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
        Altres Farmàcies d'Arenys de Mar:
      </Typography>
      <div className={classes.cardContainer}>{html}</div>
    </section>
  );
}
