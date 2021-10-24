import React, { useState,useEffect } from 'react'
import axios from 'axios';
export default function UserList(props) {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${props.gitUser}/followers`)
    .then(response => setUsers(response.data))
    .catch(error => console.log(error));
    
  }, []);


    console.log(users);
    return  users.filter(user =>
        user.login.toLowerCase().includes(props.search.toLowerCase())
      ).map(user => {
        return(
          <div key={user.login} className="user">
            <div>
              <img src={user.avatar_url} />
            </div>
            <div>
              <h3>{user.login}</h3>
            </div>
          </div>
        );
      });

}
