import { useEffect, useState } from 'react';

export default function Activities() {
  const [activities, setActivities] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:4000/activities', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setActivities(data);
        console.log()
        setLoading(false);
      })
      .catch(error => {
        console.error('Activities fetch error:', error);
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  
  if (!activities) return <div>No Activity data for this user</div>;
  let activitiesList = activities.map((activitie, i) => {
    return (
        <li key={i} >
          <h4>{ activitie.title }</h4>
          <p>{ activitie.description }</p>
          <p>{ activitie.status }</p>
          <p>Assignee: { activitie.assignee }</p>
          <p>{ activitie.category }</p>
          <p> Status: { activitie.approval }</p>
        </li>
        )
    }); 



  return (
    <div>

        <h2>Activites </h2>
        <div>
          <ol>{activitiesList}</ol>
        </div>
      </div>
  );
}
