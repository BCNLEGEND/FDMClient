import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  try {
    const { email } = req.body;
    const apiRes = await axios.post(`${API_URL}users/forgotPassword`, {
      email,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await apiRes.data;

    if (data.status === 'success') {
      res.status(200).json({ status: 'success' });
    }
  } catch (err) {
    res.status(404).json({ status: 'error' });
  }
};
