import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Client = () => {
  const [users, setUsers] = useState([]);

  const Navigate=useNavigate();
  useEffect(() => {
    // Fetch user data and update the state
    fetch('http://localhost:5000/0auth/alluser')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);


  const Delete=async(id)=>{
      const response = await fetch(`http://localhost:5000/0auth/deleteuser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id:id }),
            credentials: 'include',
          });
          window.alert('user deleted');
                   window.location.reload(); // Reload the page
  }

  const edituser=async(id)=>{
       Navigate(`/edituser/${id}`);
  }

  return (
    <div className="my-6 font-mono">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>

      {users && users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-1 py-3 bg-gray-400 text-gray-600">Name</th>
                <th className="px-1 py-3 bg-gray-200 text-gray-600">Last Name</th>
                <th className="px-1 py-3 bg-gray-200 text-gray-600">Email</th>
                <th className="px-1 py-3 bg-gray-200 text-gray-600">Phone</th>
                <th className="px-1 py-3 bg-gray-200 text-gray-600">Project</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="bg-white">
                  <td className="px-1 py-4 border-l-[1px]">{user.name}</td>
                  <td className="px-1 py-4 border-l-[1px]">{user.lastname}</td>
                  <td className="px-1 py-4 border-l-[1px]">{user.email}</td>
                  <td className="px-1 py-4 border-l-[1px]">{user.mobile}</td>
                  <td className="px-1 py-4 border-l-[1px]">{user.project}</td>
                  <td className="px-1 py-4 border-l-[1px]">
                    <button
                      className="mr-2 text-blue-500"
                     onClick={()=>edituser(user._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                     onClick={()=>Delete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No User found</p>
      )}
    </div>
  );
}

export default Client;
