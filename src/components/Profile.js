import { useEffect, useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:4000/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Profile fetch error:', error);
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  
  if (!profile) return <div>No profile data</div>;
  return (
    <div>

        <h2>Profile</h2>
        <div>
          <p>Email: {profile.email}</p>
          <p>Role: {profile.role}</p>
        </div>
      </div>
  );
}
