import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '@/utils/api';
import { IMG_API } from '@/utils/api';
import { IMG_VOTE_API } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import SocialShare from '@/components/SocialShare/SocialShare';
import Dialog from '@mui/material/Dialog';

const PhotoVote = ({ photo, votes, setVotes, setError}) => {
  const [open, setOpen] = useState(false);
  const [photoVotes, setPhotoVotes] = useState(photo.votes);
  const [disabled, setDisabled] = useState(false)

  const handleShare = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVote = async (e, id) => {
    e.stopPropagation();
    const allVotes = [...votes];
    if (allVotes.length < 3) {
      allVotes.push(id);
      localStorage.setItem('votes2022', allVotes.toString());
      const res = await axios.patch(`${API_URL}photos/vote/${id}`);
      const resPhoto = await res;
      if (resPhoto.status == 200) {
        const newVotes = (photoVotes += 1);
        setPhotoVotes(newVotes);
        setDisabled(true);
        setVotes(allVotes);
      } else {
        setError('Sorry something went wrong, Please try again later!!!');
      }
    } else {
      setDisabledAll(true)
      setError('You already voted 3 times!!!');
    }
  };

  return (
    <Link href={`/2022/vote/${photo._id}`}>
      <Card style={{ padding: 'var(--size-xxs)' }}>
        <CardContent>
          <CardMedia
            children={
              <Image
                src={`${IMG_API}/uploads/photos/${photo.year}/${photo.image}`}
                width="12"
                height="9"
                layout="responsive"
                alt={photo.title}
              />
            }
          />
          <Grid container item xs={12} style={{ marginTop: 'var(--size-xxs)' }}>
            <Grid item xs={12}>
              <Typography variant="h6" color="primary">
                {photo.title && photo.title}
              </Typography>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Grid item xs={6}>
                <Typography variant="body2">
                  {photo.firstName} {photo.lastName[0]}.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  disabled = {disabled || votes.includes(photo._id) || votes.length >= 3}
                  onClick={(e) => handleVote(e, photo._id)}
                  color="secondary"
                  aria-label="Vote image button"
                >
                  <ThumbUpIcon />
                </IconButton>
              </Grid>
              <Grid item xs={2}> 
                <IconButton
                  onClick={(e) => handleShare(e)}
                  color="primary"
                  aria-label="Share image to social media"
                >
                  <ShareIcon />
                </IconButton>
                <Dialog onClose={handleClose} open={open}>
                  <Paper
                    style={{
                      width: '80%',
                      margin: 'var(--size-s) auto',
                      padding: 'var(--size-xxs)',
                    }}
                  >
                    <Grid
                      container
                      spacing={4}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={10}>
                        <Typography variant="h4" color="primary">
                          Social Media Share:
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton onClick={handleClose} color="primary">
                          <CloseIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={12}>
                        <SocialShare
                          shareUrl={`https://www.farmaciadelmar.com/2021/vote/${photo.image.replace(
                            '.webp',
                            ''
                          )}`}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Dialog>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{photoVotes} ❤️</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PhotoVote;
