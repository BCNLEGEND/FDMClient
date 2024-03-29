import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { API_URL } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Photo from '@/components/Photo/Photo';
import Head from 'next/head';

const IndividualPhoto = (props, params) => {
  const { photo } = props;
  return (
    <>
      <Head>
        <title>
          Concurs Fotogràfic {photo.year}
          {photo.title && ` - ${photo.title}`} » Farmàcia del mar » Arenys de
          Mar
        </title>
      </Head>
      <main>
        <section style={{ width: '80%', height: '90vh', margin: '2rem auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Link href={`/photocontests/${photo.year}`}>
                <Button color="primary">
                  <ArrowBackIosIcon fontSize="small" /> Enrere
                </Button>
              </Link>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={8}>
                <Typography
                  style={{ color: 'var(--primary-color)', margin: '1rem 0' }}
                  variant="h4"
                  component="h1"
                >
                  {photo.firstName} {photo.lastName}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  style={{ color: 'var(--primary-color)', margin: '1rem 0' }}
                  variant="h4"
                  component="h3"
                >
                  {photo.votes} ❤️
                </Typography>
              </Grid>
              <Typography variant="h5" component="h2">
                {photo.title && photo.title}
              </Typography>
            </Grid>
            <Grid key={photo._id} item xs={12}>
              <Photo photo={photo} fullPhoto={true} />
            </Grid>
          </Grid>
        </section>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(`${API_URL}photos`);
  const photos = await res.data;

  const paths = photos.map((photo) => ({
    params: { year: String(photo.year), id: photo._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id, year } = params;
  const res = await axios.get(`${API_URL}photos/${year}/${id}`);

  const photo = await res.data;

  if (!photo) {
    return {
      notFound: true,
    };
  }

  return {
    props: { photo },
  };
}

export default IndividualPhoto;
