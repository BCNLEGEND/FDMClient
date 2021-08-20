import { API_URL } from '@/utils/api';
import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const apiRes = await axios.get(`${API_URL}/users/logout`);
      const data = await apiRes.data;

      if (data.status === 'success') {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('JWT_token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            expires: new Date(0), // in the past
            sameSite: 'strict',
            path: '/',
          })
        );

        res.status(200).json({ message: 'successfully logged out' });
      }
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
