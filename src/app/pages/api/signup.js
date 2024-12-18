import connectMongo from '../../connectMongo';
import User from '../../models/User';
import qr from 'qr-image';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password, medications, allergies, height, weight, age, emergencyContacts } = req.body;

    try {
      await connectMongo();

      // Generate QR code
      const qrCode = qr.imageSync(`https://www.yourwebsite.com/user/${email}`, { type: 'png' });
      
      // Create new user
      const newUser = new User({
        firstName,
        lastName,
        email,
        password, // You should hash this before saving it
        medications,
        allergies,
        height,
        weight,
        age,
        emergencyContacts,
        qrCode: qrCode.toString('base64')  // Save the QR code as a base64 string
      });

      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
