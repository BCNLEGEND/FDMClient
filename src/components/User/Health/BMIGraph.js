import { classnames } from '@material-ui/data-grid';
import useStyles from './UserHealthProfileStyles';

export default function BMIGraph(props) {
  const classes = useStyles();
  const { bmi } = props;
  return (
    <div className={classnames.BMIGraphContainer}>
      <div className={classes.BMICircle}>{Math.round(bmi * 10) / 10}</div>
    </div>
  );
}
