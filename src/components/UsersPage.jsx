import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleEdit = (userId) => {
    console.log(`Edit user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    console.log(`Delete user with ID ${userId}`);
  };

  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
            <p>Name: {`${user.first_name} ${user.last_name}`}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => handleEdit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
