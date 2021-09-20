import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  try {
    const {
      //   firstName,
      //   lastName,
      //   email,
      //   password,
      //   passwordConfirm,
      //   acceptDatos,
      //   acceptMKT,
    } = req.body.newOrder;
    const apiRes = await axios.post(`${API_URL}/orders/create`, {
      //   firstName,
      //   lastName,
      //   email,
      //   password,
      //   passwordConfirm,
      //   acceptDatos,
      //   acceptMKT,
    });
    const data = await apiRes.data;

    if (data.status === 'success') {
      res.status(200).json({ order: data.data.order });
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
