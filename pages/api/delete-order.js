import { API_URL } from '@/utils/api';
import axios from 'axios';

export default async (req, res) => {
  try {
    const {deletedOrder} = req.body
    const apiRes = await axios.patch(
      `${API_URL}orders/delete/${deletedOrder._id}`,
      {
        deletedOrder
      }
    );
    const data = await apiRes;
    if (data.status === 200) {
      res.status(200).json({ message: 'success' });
    }
  } catch (err) {
    res.status(401).json(err);
  }
};