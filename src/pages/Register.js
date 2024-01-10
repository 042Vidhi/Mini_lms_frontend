import React, { useState } from 'react';
import { auth ,createUserWithEmailAndPassword, updateProfile } from '../config/firebase'; // Import your Firebase auth instance
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice'; // Replace with the correct path to your Redux actions
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    photoUrl: '',
    role: 'Student',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const dispatch = useDispatch();

  const register = async () => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Update user profile
      await updateProfile(userCredential.user, {
        displayName: formData.username,
        photoURL: formData.photoUrl,
        role: formData.role,
      });

      // Signed in
      const user = userCredential.user;
      console.log(user);

      // Dispatch user data to Redux store
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: formData.username,
          photoURL: formData.photoUrl,
          role: formData.role
        })
      );

      // You can redirect to another page or provide feedback to the user here

    } catch (error) {
      console.error(error.message);
      alert(error.message); // Show an error message to the user
    }
  };

  return (
    <div className='flex justify-center flex-col items-center h-screen'>
      <form className='flex flex-col bg-slate-200 w-[300px] h-[fit-content] m-4 p-2 rounded-lg text-sm leading-[2rem]'>
      <h1 className='text-bold text-xl text-center'>Register</h1>
        <label>Email:</label>
        <input className="rounded-md" type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input className="rounded-md" type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Name:</label>
        <input className="rounded-md" type="text" name="username" value={formData.username} onChange={handleChange} />

        <label>Profile Picture URL:</label>
        <input className="rounded-md" type="text" name="photoUrl" value={formData.photoUrl} onChange={handleChange} />

        <label>Role:</label>
        <select className="rounded-md" name="role" value={formData.role} onChange={handleChange}>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>

        <button type="button" onClick={register} className='bg-purple-600 my-2 rounded-lg text-white'>
          Register
        </button>
        <Link to="/login" className='text-center text-xs text-slate-400 hover:text-blue-500'
        
        >Already have an account? Login</Link>
      </form>
      <div className="bg-purple-600 text-white rounded-md px-4 py-2">
      <Link to="/" >Go to Home</Link>
    </div>
    </div>
  );
};

export default Register;
