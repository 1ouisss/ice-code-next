// Import statements
import React from "react";

// Defining the ProfileProps type
type ProfileProps = {
  profile: {
    id: string;
    name: string;
    qrValue: string;
  };
};

// Profile page component
const ProfilePage: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className="profile-container p-8 mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        Your Profile
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium text-gray-800">Unique ID:</h3>
          <p className="text-gray-600">{profile.id}</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-800">QR Code:</h3>
          <a href={profile.qrValue} className="text-blue-600 hover:underline">
            {profile.qrValue}
          </a>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-800">Name:</h3>
          <p className="text-gray-600">{profile.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
