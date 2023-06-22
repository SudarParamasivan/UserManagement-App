import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import UserList from './UserList';
import EditUserForm from './EditUserForm';
import Swal from 'sweetalert2';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter((user) => user.id !== id));
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      }
    });
  };

  return (
    <div>
      {editing ? (
        <EditUserForm user={currentUser} updateUser={updateUser} />
      ) : (
        <div>
          <AddUserForm addUser={addUser} />
        </div>)}
        <div>
        <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
    </div>
  );
};

export default App;
