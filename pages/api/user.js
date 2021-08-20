import { API_URL } from '@/utils/api';
import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  const { JWT_token } = cookie.parse(req.headers.cookie);
  if (!JWT_token) {
    res.status(403).json({ message: 'Not Authorized' });
    return;
  }

  const apiRes = await axios.get(`${API_URL}/users/me`, {
    headers: { authorization: `Bearer ${JWT_token}` },
  });

  const user = await apiRes.data.data.doc;

  if ((apiRes.data.statusText = 'success')) {
    res.status(200).json({ user });
  } else {
    res.status(403).json(err);
  }
};
