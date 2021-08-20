import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  const apiRes = await axios.get(`${API_URL}/photos`);
  const photos = await apiRes.data;

  if ((apiRes.data.statusText = 'success')) {
    res.status(200).json({ photos });
  } else {
    res.status(403).json(err);
  }
};
