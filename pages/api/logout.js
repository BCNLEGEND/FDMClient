import { API_URL } from '@/utils/api';
import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  console.log(req);
  const apiRes = await axios.get(`${API_URL}users/logout`);
  const data = await apiRes.data;
  // Destroy cookie
  console.log(apiRes);
  if (apiRes.statusCode === 200) {
    localStorage.removeItem('user');
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('JWT_token', 'abcdefgjklfskdlf', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        expires: new Date(0), // in the past
        sameSite: 'strict',
        path: '/',
      })
    );
    res.status(200).json({ message: 'success' });
  } else {
    res
      .status(401)
      .json({ message: 'Something went wrong please try again later' });
  }
};
