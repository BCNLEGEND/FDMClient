import { IMG_API } from '@/utils/api';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

const Photo = ({ photo, fullPhoto }) => {
  return (
    <Link href={`/photocontests/2020/${photo._id}`}>
      <Card>
        <CardContent>
          <Image
            src={`${IMG_API}${photo.image}`}
            width="100"
            height="100"
            layout="responsive"
          />
          {!fullPhoto && (
            <div style={{ margin: '1rem 0' }}>
              <Typography variant="h6">{photo.title && photo.title}</Typography>
              <Typography variant="body1">{photo.votes} ❤️</Typography>
              <Typography variant="body2">
                {photo.firstName} {photo.lastName}
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default Photo;
