import { useState } from 'react';
import { IMG_VOTE_API } from '@/utils/api';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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

const PhotoVote = ({ photo, votes, setVotes }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleShare = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVote = (id) => {
    const allVotes = [...votes];
    if (allVotes.length < 3) {
      allVotes.push(id);
      localStorage.setItem('votes2021', allVotes.toString());
    } else {
      setError('You already voted 3 times!!!');
    }
  };

  return (
    <Link href={`/2021/vote/${photo._id}`}>
      <Card>
        <CardContent>
          <Image
            src={`${IMG_VOTE_API}${photo.image}`}
            width="120"
            height="90"
            layout="responsive"
          />
          <Grid container spacing={2} style={{ margin: '1rem 0' }}>
            <Grid item xs={12}>
              <Typography variant="h6">{photo.title && photo.title}</Typography>
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
                  {photo.firstName} {photo.lastName}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  disabled={votes.includes(photo._id) || votes.length >= 3}
                  onClick={() => handleVote(photo._id)}
                  color="secondary"
                >
                  <ThumbUpIcon />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={handleShare} color="primary">
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
                <Typography variant="body1">{photo.votes} ❤️</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PhotoVote;
