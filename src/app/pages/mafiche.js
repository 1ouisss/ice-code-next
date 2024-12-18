import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react'; // Install qrcode.react library: npm install qrcode.react

export default function MaFiche() {
  const [userData, setUserData] = useState(null);

  // Fetch user data from the database (you would replace this with an API call)
  useEffect(() => {
    // Example API call to get user data
    const fetchUserData = async () => {
      const response = await fetch('/api/userData'); // You should create an API for fetching this data
      const data = await response.json();
      setUserData(data); // Assume it returns the user data
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
