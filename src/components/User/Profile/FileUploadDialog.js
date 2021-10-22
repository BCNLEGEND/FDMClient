import { useState, useContext } from 'react';
import { API_URL } from '@/utils/api';
import axios from 'axios';
import AuthContext from '@/context/AuthContext';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import text from './UserProfileText';
import { LanguageContext } from '@/context/language';

function FileUploadDialog(props) {
  const { user, updateUserDetails } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const { type, onClose, selectedValue, open, setImage } = props;

  const handleClose = () => {
    onClose();
  };

  const uploadHandler = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post(
        type == 'user'
          ? `${API_URL}/userupload`
          : `${API_URL}/photocontestupload`,
        formData,
        config
      );
      if (type == 'user') {
        updateUserDetails({ ...user, photo: data });
      }
      if (type == 'photoContest') {
        setImage(data);
      }
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{text[language].editPhotoText}</DialogTitle>
      <DialogContent>
        <form type="submit">
          <input
            type="file"
            name="userPhotoUpload"
            id="userPhotoUpload"
            onChange={uploadHandler}
          ></input>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default FileUploadDialog;
