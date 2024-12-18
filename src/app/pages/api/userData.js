// src/app/pages/api/userData.js

import connectMongo from '../../../connectMongo';
import User from '../../../models/User';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectMongo();
      const user = await User.findById(req.query.userId); // Replace with actual logic to fetch user
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
