import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { NEXT_API } from '@/utils/api';
import { API_URL } from '@/utils/api';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import Photo from '@/components/Photo/Photo';
import Footer from '@/components/Footer/Footer';

const photocontest = (props) => {
  const { photos } = props;
  return (
    <>
      <main>
        <section style={{ width: '80%', margin: '2rem auto' }}>
          <Link href={`/photocontests`}>
            <Button color="primary">
              <ArrowBackIosIcon fontSize="small" /> Enrere
            </Button>
          </Link>
          <Typography
            style={{ color: 'var(--primary-color)', margin: '1rem 0' }}
            variant="h3"
            component="h1"
          >
            Participants del concurs {photos[0].year}:
          </Typography>
          <Grid container spacing={2}>
            {photos.map((photo) => (
              <Grid key={photo._id} item xs={12} sm={6} md={4}>
                <Photo photo={photo} />
              </Grid>
            ))}
          </Grid>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const res = await axios.get(`${API_URL}photos/2021`);

  const photos = await res.data;

  if (!photos) {
    return {
      notFound: true,
    };
  }

  return {
    props: { photos },
  };
}

export default photocontest;
