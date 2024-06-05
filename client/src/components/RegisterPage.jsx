import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"

function RegisterPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e){
    e.preventDefault();
    
    try {
      await axios.post('/registerUser', {
        name,
        email,
        password
      });
      alert('Registration complete!')
    } catch (error) {
      alert("didn't work?")
    }


    
  }

  return (
    <div className="mt-4">
    <h1 className="text-4xl text-center mb-5">Sign Up</h1>
      <form onSubmit={registerUser} className="max-w-3xl mx-auto text-center">
        <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-xl"/>
        <input type="email" placeholder="your@mail.com" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-xl"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-xl"/>
        <input type="password" placeholder="Confirm Password" className="w-full border my-1 py-2 px-3 rounded-xl"/>
        <div className="pt-2 border bg-red-400 hidden">Email already in use! <span className="underline">Reset Password</span></div>
        <button className="border w-1/2 bg-mid rounded-3xl h-10 text-xl mt-4">Sign Up</button>
        <div className="mt-4 text-gray-500">
          Already have an account? <Link to={'/login'} className=" underline text-black "> Sign In Here!</Link>
        </div>
      </form>
  </div>
  )
}

export default RegisterPage