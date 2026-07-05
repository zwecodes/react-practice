import { useState, useEffect } from 'react'
import React from 'react'

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  
  
    const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      setUser(data.results[0]);
    } catch (err) {
      setError('Something went wrong');
    }
    setLoading(false);
  
  } 


  useEffect(() =>{
    fetchUser();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {error ? 
        <p>{error}</p>
       : 
       loading || !user ? 
       <p>loading...</p> :
       <div>
        <p>{user.name.first} {user.name.last}</p>
        <img src={user.picture.large} alt="User Profile" style={{ borderRadius: '50%', width: '150px' }}/> 
        <button onClick={fetchUser}>next profile</button>
      </div>
      }
    </div>
  )
}

export default App
