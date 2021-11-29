import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  try {
    const newOrder = req.body
    const apiRes = await axios.post(`${API_URL}orders`, newOrder);
    if (apiRes.status === 200 ){
      res.status(200).json({ message: 'success' });
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
