import { IMG_API } from '@/utils/api';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

const Photo = ({ photo, fullPhoto }) => {
  return (
    <Link href={`/photocontests/${photo.year}/${photo._id}`}>
      <Card>
        <CardContent>
          <Image
            src={`${IMG_API}${photo.image}`}
            width="100"
            height="100"
            layout="responsive"
          />
          {!fullPhoto && (
            <Grid container spacing={2} style={{ margin: '1rem 0' }}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  {photo.title && photo.title}
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body2">
                  {photo.firstName} {photo.lastName}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">{photo.votes} ❤️</Typography>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default Photo;
