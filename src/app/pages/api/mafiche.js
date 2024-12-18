import connectMongo from '../../connectMongo';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, medications, allergies, height, weight, age, emergencyContacts } = req.body;

    try {
      await connectMongo();

      // Update user data with the questionnaire responses
      const user = await User.findOneAndUpdate(
        { email },
        { medications, allergies, height, weight, age, emergencyContacts },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({ message: 'Questionnaire data updated' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating questionnaire data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
