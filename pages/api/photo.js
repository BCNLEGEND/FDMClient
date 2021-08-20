import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  const apiRes = await axios.get(
    `${API_URL}/photos/${req.body.year}/${req.body.id}`
  );
  const photo = await apiRes.data;

  if ((apiRes.data.statusText = 'success')) {
    res.status(200).json({ photo });
  } else {
    res.status(403).json(err);
  }
};
