import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '@/utils/api';
import { IMG_VOTE_API } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
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
        <meta
          name="description"
          content={`${photo.title && photo.title} ❤️❤️❤️ ${photo.firstName} ${
            photo.lastName
          } ❤️❤️❤️`}
        />
        <meta
          property="og:description"
          content={`${photo.title && photo.title} ❤️❤️❤️ ${photo.firstName} ${
            photo.lastName
          } ❤️❤️❤️`}
        />
      </Head>
      <main>
        <section style={{ width: '80%', margin: 'var(--size-s) auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Link href={`/2021/vote`}>
                <Button color="primary">
                  <ArrowBackIosIcon fontSize="small" /> Enrere
                </Button>
              </Link>
            </Grid>
            <Card style={{ width: '100%', margin: 'var(--size-s) auto' }}>
              <CardContent>
                <Grid container item xs={12} spacing={4}>
                  <Grid item xs={8}>
                    <Typography
                      style={{
                        color: 'var(--primary-color)',
                        margin: '1rem 0',
                      }}
                      variant="h3"
                      component="h1"
                    >
                      {photo.firstName} {photo.lastName}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      style={{
                        color: 'var(--primary-color)',
                        margin: '1rem 0',
                      }}
                      variant="h4"
                      component="h3"
                    >
                      {photo.votes} ❤️
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4" component="h2">
                      {photo.title && photo.title}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  key={photo._id}
                  item
                  xs={12}
                  style={{ marginTop: 'var(--size-xxs)' }}
                >
                  <CardMedia
                    children={
                      <Image
                        src={`${IMG_VOTE_API}${photo.image}`}
                        width="12"
                        height="9"
                        layout="responsive"
                        alt={photo.title}
                      />
                    }
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
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
    // revalidate: 1,
  };
}

export default IndividualPhoto;
