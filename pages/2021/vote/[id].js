import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '@/utils/api';
import { IMG_VOTE_API } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import PhotoVote from '@/components/Photo/PhotoVote';

const IndividualPhoto = (props, params) => {
  const { photo } = props;
  return (
    <main>
      <section
        style={{ width: '80%', height: '90vh', margin: 'var(--size-m) auto' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Link href={`/2021/vote`}>
              <Button color="primary">
                <ArrowBackIosIcon fontSize="small" /> Enrere
              </Button>
            </Link>
          </Grid>
          <Card style={{ width: '90%', margin: 'var(--size-s) auto' }}>
            <CardContent>
              <Grid container item xs={12} spacing={4}>
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
                <Image
                  src={`${IMG_VOTE_API}${photo.image}`}
                  width="120"
                  height="90"
                  layout="responsive"
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </section>
    </main>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(`${API_URL}photos/2021`);
  const photos = await res.data;

  const paths = photos.map((photo) => ({
    params: { id: photo._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await axios.get(`${API_URL}photos/2021/${id}`);

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
