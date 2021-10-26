import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { NEXT_API } from '@/utils/api';
import { API_URL } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Photo from '@/components/Photo/Photo';
import Footer from '@/components/Footer/Footer';

const photocontest = (props) => {
  const { photos } = props;
  return (
    <>
      <main>
        <section style={{ width: '80%', margin: '2rem auto' }}>
          <Link href={`/2021`}>
            <Button color="primary">
              <ArrowBackIosIcon fontSize="small" /> Enrere
            </Button>
          </Link>
          <Typography
            style={{ color: 'var(--primary-color)', margin: '1rem 0' }}
            variant="h3"
            component="h1"
          >
            Voting is not yet possible!
          </Typography>
          <Typography
            style={{ color: 'var(--primary-color)', margin: '1rem 0' }}
            variant="h3"
            component="h1"
          >
            La votacion no esta abierto todavia!
          </Typography>
          <Typography
            style={{ color: 'var(--primary-color)', margin: '1rem 0' }}
            variant="h3"
            component="h1"
          >
            No pots votar encara!
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
