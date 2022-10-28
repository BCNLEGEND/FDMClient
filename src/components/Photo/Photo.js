import { IMG_API } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

const Photo = ({ photo, fullPhoto }) => {
  return (
    <Link href={`/photocontests/${photo.year}/${photo._id}`}>
      <Card>
        <CardContent>
          <Image
            src={`${IMG_API}/uploads/photos/${photo.year}/${photo.image}`}
            width="12"
            height="9"
            layout="responsive"
          />
          {!fullPhoto && (
            <Grid container spacing={2} style={{ margin: '1rem 0' }}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  {photo.title && photo.title}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">
                  {photo.firstName} {photo.lastName}
                </Typography>
              </Grid>
              <Grid item xs={4}>
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
