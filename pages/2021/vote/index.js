import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { API_URL } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import PhotoVote from '@/components/Photo/PhotoVote';
import Footer from '@/components/Footer/Footer';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const photocontest2021 = (props) => {
  const { photos } = props;
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.getItem('votes2021') &&
      setVotes(localStorage.getItem('votes2021').split(','));
  }, []);

  useEffect(() => {
    () => error && toast.error(error);
  }, [error]);

  return (
    <>
      <Head>
        <title>
          Vota el guanyador del Concurs Fotogràfic 2021 » Farmàcia del mar »
          Arenys de Mar
        </title>
        <meta
          name="description"
          content="Vota la teva foto favorita en el 3er concurs fotogràfic de la Farmàcia del Mar."
        />
        <meta
          property="og:description"
          content="Vota la teva foto favorita en el 3er concurs fotogràfic de la Farmàcia del Mar."
        />
      </Head>
      <main>
        <ToastContainer />
        <section style={{ width: '80%', margin: 'var(--size-xs) auto' }}>
          <Link href={`/`}>
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
            <Grid item xs={12}>
              {!(votes.length >= 3) ? (
                <Alert severity="info">
                  <AlertTitle>Informació:</AlertTitle>
                  <Typography variant="body1">
                    Només pots votar 3 imatges!! Un cop hagis votat una imatge{' '}
                    <ThumbUpIcon color="secondary" /> no podràs cancel.lar el
                    teu vot.
                  </Typography>
                  <Typography variant="body1">
                    Solo puedes votar 3 imágenes!! Una vez hayas votado una
                    imagen <ThumbUpIcon color="secondary" /> no podrás cancelar
                    tu voto.
                  </Typography>
                  <Typography variant="body1">
                    You can only vote 3 images!! Once you clicked the{' '}
                    <ThumbUpIcon color="secondary" /> you are not able to cancel
                    your vote.
                  </Typography>
                </Alert>
              ) : (
                <Alert severity="warning">
                  <AlertTitle>Limit</AlertTitle>
                  <Typography variant="body1">
                    Gràcies per participar, ja has votat 3 imatges!!!
                  </Typography>
                  <Typography variant="body1">
                    Gracias por participar, ya has votado 3 imágenes!!!
                  </Typography>
                  <Typography variant="body1">
                    Thank you for participating, you already have voted 3
                    images!!!
                  </Typography>
                </Alert>
              )}
            </Grid>
            {photos.map((photo) => (
              <Grid key={photo._id} item xs={12} sm={6} lg={4}>
                <PhotoVote
                  photo={photo}
                  votes={votes}
                  setVotes={setVotes}
                  setError={setError}
                />
              </Grid>
            ))}
          </Grid>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const res = await axios.get(`${API_URL}photos/2021`);
  const photos = await res.data;

  if (!photos) {
    return {
      notFound: true,
    };
  }

  return {
    props: { photos },
    revalidate: 1,
  };
}

export default photocontest2021;
