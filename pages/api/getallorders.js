import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  const apiRes = await axios.get(`${API_URL}orders`);
  const orders = await apiRes.data.data;

  if ((apiRes.data.statusText = 'success')) {
    res.status(200).json({ orders });
  } else {
    res.status(403).json(err);
  }
};
