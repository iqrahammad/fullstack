import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchUserTable = () => {
  const [users, setUsers] = useState([]);
  const [editName,setEditName]=useState("");
  const [editMessage,setEditMessage]=useState("");
  const [editId,setEditId]=useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getusers");

      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleEdit=(u)=>{
    setEditId(u._id);
    setEditId(u.name);
    setEditMessage(u.message);
  }

  const handleSave=async()=>{
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
      fetchUsers();
    }, [users]);
  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-[50%] mx-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr>
                <th>{index + 1}</th>  
                <td>{u.name}</td>
                <td>{u.message}</td>
                <td>
                  <button className="btn-soft btn-info">Edit</button>
                  <button className='btn-soft btn-error'>Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default FetchUserTable
