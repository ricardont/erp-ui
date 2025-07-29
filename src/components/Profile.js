import { useEffect, useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    fetch('http://localhost:4000/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        {profile.map(a => (
          <li key={a.id}>
            {a.email} - {a.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
