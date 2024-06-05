import axios from "axios";
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function loginUser(e) {
    e.preventDefault();

    try {
      axios.post('/loginUser', {email, password}, {withCredentials: true})
      alert("login success")
      setRedirect(true)

    } catch (error) {
      alert("login failed")
    }
  }

  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center mb-5">Login</h1>
        <form action="" onSubmit={loginUser} className="max-w-3xl mx-auto text-center">
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-xl"/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-xl"/>
          <button className="border w-1/2 bg-mid rounded-3xl h-10 text-xl mt-4">Login</button>
          <div className="mt-4 text-gray-500">
            No Account? <Link to={'/register'} className=" underline text-black "> Sign Up Here!</Link>
          </div>
        </form>
    </div>
  )
}

export default LoginPage