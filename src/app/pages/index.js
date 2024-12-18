import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react'; // Ensure you have installed qrcode.react

export default function HomePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace this with a proper API call to get user data
    const fetchUserData = async () => {
      const response = await fetch('/api/userData'); // Update with the correct API path
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mafiche-container">
      <h1>My Profile</h1>
      <p>Name: {userData.firstName} {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
      <p>Height: {userData.height}</p>
      <p>Weight: {userData.weight}</p>
      
      {/* QR Code with Unique ID */}
      <div>
        <h3>Unique ID: {userData._id}</h3>
        <QRCode value={userData._id} size={256} />
      </div>

      {/* Emergency Contact Info */}
      <h3>Emergency Contacts</h3>
      {userData.emergencyContacts.map((contact, index) => (
        <div key={index}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
        </div>
      ))}

      {/* Links to Resources and Shop pages */}
      <div>
        <button onClick={() => window.location.href = '/ressources'}>Go to Resources</button>
        <button onClick={() => window.location.href = '/shop'}>Visit Shop</button>
      </div>
    </div>
  );
}

