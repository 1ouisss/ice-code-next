// app/profile/page.tsx

import { NextResponse } from "next/server";

type ProfileProps = {
  profile: {
    id: string;
    name: string;
    qrValue: string;
  };
};

const ProfilePage = ({ profile }: ProfileProps) => {
  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <p>Unique ID: {profile.id}</p>
      <p>QR Code: <a href={profile.qrValue}>{profile.qrValue}</a></p>
      <p>Name: {profile.name}</p>
    </div>
  );
};

export default ProfilePage;
