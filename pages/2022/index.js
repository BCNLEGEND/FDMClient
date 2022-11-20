import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CameraIcon from '@mui/icons-material/Camera';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import Head from 'next/head';

import { LanguageContext } from '@/context/language';

import text from '@/utils/texts/photoContest2022Text';
import genericText from '@/utils/texts/genericTexts';

const concurs = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>
          Concurs Fotogràfic 2023 » Farmàcia del mar » Arenys de Mar
        </title>
        <meta
          name="description"
          content="Us animem a participar en el 4rt concurs fotogràfic de la Farmàcia del Mar. L'objectiu del concurs és aconseguir una magnífica col·lecció de fotografies. Les fotografies guanyadores formaran part del calendari Salut i Benestar 2023 de la Farmàcia del Mar."
        />
        <meta
          property="og:description"
          content="Us animem a participar en el 4rt concurs fotogràfic de la Farmàcia del Mar. L'objectiu del concurs és aconseguir una magnífica col·lecció de fotografies. Les fotografies guanyadores formaran part del calendari Salut i Benestar 2023 de la Farmàcia del Mar."
        />
      </Head>
      <main>
        <section
          style={{
            color: 'var(--primary-color)',
            width: '80%',
            margin: '2rem auto',
          }}
        >
          <Link href={`/`}>
            <Button color="primary">
              <ArrowBackIosIcon fontSize="small" /> {genericText[language].back}
            </Button>
          </Link>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                style={{
                  color: 'var(--primary-color)',
                }}
                variant="h2"
                component="h1"
              >
                {text[language].title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{text[language].subTitle}</Typography>
              <Typography variant="body1">
                {text[language].subTitle2}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                style={{
                  color: 'var(--secondary-color)',
                }}
                variant="h3"
                component="h2"
              >
                {text[language].standOut}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                style={{
                  color: 'var(--primary-color)',
                }}
                variant="h4"
                component="h3"
              >
                {text[language].vote}
              </Typography>
            </Grid>
            {/* <Grid item xs={12} sm={5}>
              <Link href="/2022/upload">
                <Button variant="contained" color="secondary">
                  {text[language].btn3}
                </Button>
              </Link>
            </Grid> */}
            <Grid item xs={12} sm={5}>
              <Link href="/2022/vote">
                <Button variant="contained" color="secondary">
                  {text[language].btn1}
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={5}>
              <a href="#bases" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="primary">
                  {text[language].btn2}
                </Button>
              </a>
            </Grid>
            <Grid item xs={12}>
              <Image
                src={`/media/img/IMG_WEB_CONCURSO FOTO_V3.webp`}
                width={100}
                height={35}
                layout="responsive"
                alt="3ª photocontest 2021"
              />
            </Grid>
          </Grid>
        </section>
        <Divider
          style={{
            color: 'var(--primary-color)',
            width: '80%',
            margin: '2rem auto',
          }}
        />
        <section
          id="bases"
          style={{
            color: 'var(--primary-color)',
            width: '80%',
            margin: '2rem auto',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h3">
                {text[language].title2}
              </Typography>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle2}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText2}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle3}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText3}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CameraIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item3ListItem1}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CameraIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item3ListItem2}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CameraIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item3ListItem3}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AspectRatioIcon color="error" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1" color="error">
                        {text[language].item3ListItem4}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle4}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText4a}{' '}
                  <Link href="https://www.farmaciadelmar.com/2022">
                    www.farmaciadelmar.com/2022
                  </Link>{' '}
                  {text[language].itemText4b}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <InsertPhotoIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item4ListItem1}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PersonIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item4ListItem2}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PersonIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item4ListItem3}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ContactPhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item4ListItem4}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ContactMailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        {text[language].item4ListItem5}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
                <Typography variant="body2">
                  {text[language].itemText4c}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle5}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText5}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle6}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText6a}{' '}
                  <Link href="https://www.farmaciadelmar.com/2022/vote">
                    www.farmaciadelmar.com/2022/vote
                  </Link>{' '}
                  {text[language].itemText6b}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle7}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText7}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle8}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText8}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle9}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText9}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1">
                  {text[language].itemTitle10}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  {text[language].itemText10}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </section>
      </main>
    </>
  );
};

export default concurs;
