export default function ProfilePage({ profile }) {
  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <p>Unique ID: {profile.id}</p>
      <p>QR Code: {profile.qrValue}</p>
      <p>Name: {profile.name}</p>
      {/* Add more profile data as needed */}
    </div>
  );
}
