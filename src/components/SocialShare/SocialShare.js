import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { Grid } from '@mui/material';

const SocialShare = ({ shareUrl }) => {
  return (
    <Grid style={{ margin: 'auto' }} container spacing={4} item>
      <Grid item xs={4}>
        <EmailShareButton url={shareUrl}>
          <EmailIcon size={48} round={true} />
        </EmailShareButton>
      </Grid>
      <Grid item xs={4}>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={48} round={true} />
        </FacebookShareButton>
      </Grid>
      <Grid item xs={4}>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={48} round={true} />
        </LinkedinShareButton>
      </Grid>
      <Grid item xs={4}>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={48} round={true} />
        </TwitterShareButton>
      </Grid>
      <Grid item xs={4}>
        <PinterestShareButton url={shareUrl}>
          <PinterestIcon size={48} round={true} />
        </PinterestShareButton>
      </Grid>
      <Grid item xs={4}>
        <RedditShareButton url={shareUrl}>
          <RedditIcon size={48} round={true} />
        </RedditShareButton>
      </Grid>
      <Grid item xs={4}>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={48} round={true} />
        </TelegramShareButton>
      </Grid>
      <Grid item xs={4}>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={48} round={true} />
        </WhatsappShareButton>
      </Grid>
      <Grid item xs={4}>
        <TumblrShareButton url={shareUrl}>
          <TumblrIcon size={48} round={true} />
        </TumblrShareButton>
      </Grid>
    </Grid>
  );
};

export default SocialShare;
