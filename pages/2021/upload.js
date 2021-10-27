import { useState, useEffect } from 'react';
import { NEXT_API } from '@/utils/api';
import { API_URL } from '@/utils/api';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CameraIcon from '@mui/icons-material/Camera';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PersonIcon from '@mui/icons-material/Person';
import FileUploadDialog from '@/components/User/Profile/FileUploadDialog';
import { CircularProgress } from '@mui/material';

const Upload = () => {
  const [firstName, setFirstName] = useState('');
  const [image, setImage] = useState(null);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, [image]);

  useEffect(
    () => (error && toast.error(error)) || (success && toast.success(success)),
    [error, success]
  );

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'mobile':
        setMobile(e.target.value);
        break;
      case 'title':
        setTitle(e.target.value);
        break;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const uploadNewPhoto = async () => {
    try {
      const res = await axios.post(
        `${NEXT_API}uploadPhoto`,
        { firstName, lastName, image, email, mobile, title },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSuccess('Fotografia penjada correctament!');
    } catch (err) {
      setError(
        "No s'ha pogut penjar la fotografia, si us plau intenta-ho de nou."
      );
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadNewPhoto();
    setFirstName('');
    setImage(null);
    setLastName('');
    setEmail('');
    setMobile('');
    setTitle('');
  };

  return (
    <main>
      <section
        style={{
          color: 'var(--primary-color)',
          width: '80%',
          margin: '2rem auto',
        }}
      >
        <Link href={`/2021`}>
          <Button color="primary">
            <ArrowBackIosIcon fontSize="small" /> Enrere
          </Button>
        </Link>
        <Paper
          style={{
            color: 'var(--primary-color)',
            margin: 'var(--size-s) auto',
            padding: 'var(--size-xxs)',
          }}
        >
          <ToastContainer />
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1">
                  Participa en el 3er Concurs Fotogràfic
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Nom"
                  variant="standard"
                  value={firstName}
                  style={{ width: '80%' }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Cognom"
                  variant="standard"
                  value={lastName}
                  style={{ width: '80%' }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Mail"
                  variant="standard"
                  value={email}
                  style={{ width: '80%' }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="mobile"
                  name="mobile"
                  label="Mòbil"
                  variant="standard"
                  value={mobile}
                  style={{ width: '80%' }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="title"
                  name="title"
                  label="Títol de la foto"
                  variant="standard"
                  value={title}
                  style={{ width: '80%' }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {loading ? (
                  <CircularProgress />
                ) : image ? (
                  <Image
                    width={120}
                    height={90}
                    src={`${API_URL}photocontestupload/${image}`}
                  />
                ) : (
                  <IconButton
                    onClick={handleClickOpen}
                    color="secondary"
                    size="large"
                  >
                    <InsertPhotoIcon />
                    Selecciona i puja la teva fotografia
                  </IconButton>
                )}
              </Grid>
              {image && (
                <Grid item xs={12}>
                  <IconButton
                    onClick={handleSubmit}
                    type="submit"
                    color="secondary"
                    size="large"
                  >
                    <InsertPhotoIcon />
                    Confirma la teva participació
                  </IconButton>
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography variant="h4" component="h2">
                  Recorda les bases del Concurs:
                </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  Només s’acceptaran imatges en resolució suficient per ser
                  reproduïdes a tamany DIN A4 en format horitzontal.
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PersonIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        Podrà participar qualsevol persona amb un màxim de 3
                        fotografies enviades per persona.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CameraIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        Si una imatge no té bona resolució no podrà participar
                        en el concurs.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CameraIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        No s’accepten muntatges ni retocs.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CameraIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        L’ arxiu enviat ha de ser l’original en format jpg.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AspectRatioIcon color="error" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1" color="error">
                        Important: Fotografia en format horizontal
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <FileUploadDialog
                type="photoContest"
                open={open}
                onClose={handleClose}
                setImage={setImage}
                setLoading={setLoading}
              />
            </Grid>
          </form>
        </Paper>
      </section>
    </main>
  );
};

export default Upload;
