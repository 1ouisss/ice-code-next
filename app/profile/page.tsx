'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

export default function Profile() {
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    // Fetch user profile from the API
    fetch('/api/profile')
      .then((res) => res.json())
      .then((data) => setProfileData(data.profile))
      .catch((err) => console.error(err));
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-red-500">Your Profile</h1>
      <div className="bg-white p-4 rounded shadow-lg">
        <QRCode value={profileData.qrValue} size={150} />
        <p className="mt-4 font-bold">ID: {profileData.id}</p>
        <p>Name: {profileData.name}</p>
      </div>
    </div>
  );
}

