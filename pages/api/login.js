import { API_URL } from '@/utils/api';
import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      const apiRes = await axios.post(`${API_URL}users/login`, {
        email,
        password,
      });

      const data = await apiRes.data;

      if (data.status === 'success') {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('JWT_token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'strict',
            path: '/',
          })
        );
        res.status(200).json({ user: data.data.user });
      }
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
