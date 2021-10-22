import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  const { firstName, lastName, email, mobile, image, title } = req.body;
  const apiRes = await axios.post(`${API_URL}photos`, {
    firstName,
    lastName,
    email,
    mobile,
    image,
    title,
  });

  const photo = await apiRes.data;
  console.log(photo);
  if ((apiRes.data.statusText = 'success')) {
    res.status(200).json({ photo });
  } else {
    res.status(403).json(err);
  }
};
