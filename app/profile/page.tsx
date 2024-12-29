type ProfileProps = {
    profile: {
      id: string;
      name: string;
      qrValue: string;
    };
  };
  
  export default function ProfilePage({ profile }: ProfileProps) {
    return (
      <div className="profile-container">
        <h2>Your Profile</h2>
        <p>Unique ID: {profile.id}</p>
        <p>QR Code: <a href={profile.qrValue}>{profile.qrValue}</a></p>
        <p>Name: {profile.name}</p>
        {/* Add more profile data as needed */}
      </div>
    );
  }
  