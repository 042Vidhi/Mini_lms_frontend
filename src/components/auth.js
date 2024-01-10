import { auth , googleProvider,createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword, signOut,updateProfile} from "../config/firebase";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../redux/userSlice';
// import { onAuthStateChanged } from '../firebase';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signIn = async () => {
    try {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
          role: user.role,
        }));
        navigate('/');

    }).catch((error) => {
        alert(error);
    });

    } catch (err){
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
    <div className="w-[300px] h-[fit-content] bg-slate-200 flex flex-col m-2 p-2 rounded-lg">
    <h1 className='text-bold text-xl text-center'>Login</h1>
      <label>Email:</label>
      <input  onChange={(e) => setEmail(e.target.value)} className="rounded-md p-[4px]"/>
      <label>Password:</label>
      <input
        type="password"
       
        className="rounded-md p-[4px]"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} className="bg-purple-600 my-2 py-[4px] rounded-lg text-white">Signin</button>
      <p className="text-center text-xs text-slate-400">-----or-----</p>
      <button onClick={signInWithGoogle}
        className="bg-red-500 my-2 py-[4px] rounded-lg text-white"
      >Signin with google</button>

      <Link to="/register" className="text-center text-xs text-slate-400 hover:text-blue-500">Don't have an account? Register here</Link>
    </div>
    <div className="bg-purple-600 text-white rounded-md px-4 py-2">
      <Link to="/" >Go to Home</Link>
    </div>
    </div>
  );
};