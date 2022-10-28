import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  try {
    const { token, password, passwordConfirm } = req.body;
    const apiRes = await axios.patch(`${API_URL}users/resetPassword/${token}`, {
      password,
      passwordConfirm,
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
