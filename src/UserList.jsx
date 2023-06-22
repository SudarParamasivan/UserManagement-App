import React from 'react';
const UserList = ({ users,editUser,deleteUser}) => {
  return (
    <div>
      <h2 className='mt-2'>Users</h2>
      <div className='container-fluid'>
        <div className='row g-3 m-3'>
          <div className='card-group'>
          {users.map((user) => (
              <div className='card text-center p-2 ' style={{ width: "18rem" }} key={user.id}>
                  <h4 className='card-title'>Name:{user.name}</h4>
                  <h5 className='card-text'>Email: {user.email}</h5>
                  <h5 className='card-text'>Phone: {user.phone}</h5>
                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button type="button" class="btn btn-info btn-sm " onClick={() => editUser(user)}>Edit</button>
                      <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
                  </div>
              </div>
            ))} </div>
        </div></div>
    </div>
  );
};

export default UserList;
