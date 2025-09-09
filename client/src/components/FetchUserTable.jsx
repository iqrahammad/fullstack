import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Toaster,toast} from 'react-hot-toast';

const FetchUserTable = () => {
  const [users, setUsers] = useState([]);
  const [editName,setEditName]=useState("");
  const [editMessage,setEditMessage]=useState("");
  const [editId,setEditId]=useState(null);

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
    setEditName(u.name);
    setEditMessage(u.message);
    console.log(editId); 
  }

  const handleSave=async(id)=>{
    try {
      const response = await axios.put(`http://localhost:3000/updateuser/${id}`,{
        editName,
        editMessage
      });
      console.log(response);
      setEditId(null);
      toast.success("User Updated Successfully");
    } catch (error) {
      console.log(error);
      
      
    }
  }

  useEffect(() => {
      fetchUsers();
    }, [users]);


const handleDelete=async(id)=>{
  try {
    const response =await axios.delete(`http://localhost:3000/deleteuser/${id}`);
    console.log(response);
    toast.success(response.data.popup, {
      iconTheme: {
        primary: 'red',
      }
    });
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
    <div className="button">
      <button>Add</button>
    </div>
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
                <td>
                  {u._id == editId ? 
                  <input type="text" className='border focus:border-x-black p-2' value={editName} onChange={(e)=>setEditName(e.target.value)}/>
                  :
                  u.name
                  }
                </td>
                <td>
                  {u._id == editId ?
                <input type="text" className='border focus:border-x-black p-2' value={editMessage} onChange={(e)=>setEditMessage(e.target.value)}/>
                :
                u.message
}
                </td>
                <td className='flex gap-2'>
                  {u._id == editId ?
                  <>
                  <button className="btn btn-soft btn-info" onClick={()=>handleSave(u._id)}>Save</button>
                  <button className='btn btn-soft btn-error'onClick={()=>setEditId(null)}>Cancel</button>
                  </>
                  :
                  <>
                      <button className="btn btn-soft btn-info"onClick={()=>handleEdit(u)}>Edit</button>
                  <button className='btn btn-soft btn-error'onClick={()=>handleDelete(u._id)}>Delete</button>
                  </>
            }
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
       <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default FetchUserTable
