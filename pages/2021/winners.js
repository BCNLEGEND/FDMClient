import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { API_URL } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Photo from '@/components/Photo/Photo';
import Footer from '@/components/Footer/Footer';

const winners2021 = (props) => {
  const { winnerPhotos } = props;

  return (
    <>
      <Head>
        <title>
          Guanyadors del Concurs Fotogràfic 2021 » Farmàcia del mar »
          Arenys de Mar
        </title>
        <meta
          name="description"
          content="Guayadors al 3er concurs fotogràfic de la Farmàcia del Mar."
        />
        <meta
          property="og:description"
          content="Guayadors al 3er concurs fotogràfic de la Farmàcia del Mar."
        />
      </Head>
      <main>
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
            Guayadors del concurs {winnerPhotos[0].year}:
          </Typography>

          <Grid container spacing={2}>
            {winnerPhotos.map((photo) => (
              <Grid key={photo._id} item xs={12} sm={6} lg={4}>
                <Photo
                  photo={photo}
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
  const winnerPhotos = photos.filter(photo => photo.winner == true)

  if (!photos) {
    return {
      notFound: true,
    };
  }

  return {
    props: { winnerPhotos },
  };
}

export default winners2021;