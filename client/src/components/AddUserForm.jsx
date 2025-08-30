import React, { useState } from 'react'
import  { Toaster,toast } from 'react-hot-toast';
import axios from 'axios';
const AddUserForm = () => {
    const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmission = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3000/adduser", {
        name,
        message
      });
      console.log(response);
      setName("");
        setMessage("");
        toast.success("User Added Successfully");
    }
    catch(err){
      console.log(err)
    }
  }
  return (
   <>
    <div className='flex justify-center my-20'>
      <form onSubmit={handleSubmission}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Add User</legend>

          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

          <label className="label">Message</label>
          <textarea className="textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <button className="btn btn-neutral mt-4">ADD</button>
        </fieldset>
      </form>
      
      </div>
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
   </>
  )
}

export default AddUserForm
