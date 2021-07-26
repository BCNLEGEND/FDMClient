import { API_URL } from '@/utils/api';
import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  const { JWT_token } = cookie.parse(req.headers.cookie);

  if (!JWT_token) {
    res.status(403).json({ message: 'Not Authorized' });
    return;
  }

  try {
    const {
      firstName,
      lastName,
      email,
      birthday,
      gender,
      mobile,
      tel,
      dni,
      cip,
      streetName,
      streetNumber,
      postalcode,
      city,
      acceptDatos,
      acceptMKT,
    } = req.body.updatedUser;
    const apiRes = await axios.patch(
      `${API_URL}users/updateMe`,
      {
        firstName,
        lastName,
        email,
        birthday,
        gender,
        mobile,
        tel,
        dni,
        cip,
        streetName,
        streetNumber,
        postalcode,
        city,
        acceptDatos,
        acceptMKT,
      },
      {
        headers: { authorization: `Bearer ${JWT_token}` },
      }
    );

    const data = await apiRes.data;

    if (data.status === 'success') {
      res.status(200).json({ user: data.data.user });
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
