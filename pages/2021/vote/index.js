import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Link from 'next/link';
import { NEXT_API } from '@/utils/api';
import { API_URL } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import PhotoVote from '@/components/Photo/PhotoVote';
import Footer from '@/components/Footer/Footer';

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
      <main>
        <ToastContainer />
        <section style={{ width: '80%', margin: '2rem auto' }}>
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
            {photos.map((photo) => (
              <Grid key={photo._id} item xs={12} sm={6} md={4}>
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
