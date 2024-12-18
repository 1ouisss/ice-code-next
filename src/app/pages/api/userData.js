// pages/api/userData.js
export default function handler(req, res) {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: 30,
      height: 175,
      weight: 70,
      _id: 'unique-user-id',
      emergencyContacts: [
        { name: 'Jane Doe', phone: '123-456-7890', email: 'jane.doe@example.com' },
      ],
    };
  
    res.status(200).json(userData);
  }
  