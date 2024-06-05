import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <header className='flex p-4 justify-between items-center border-b-2'>
        <a href="/" className='flex items-center gap-1 p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        <span className='font-bold text-xl'>Event Bucket</span>
        </a>
        <div className='flex border bordger-gray-300 rounded-full items-center gap-2 px-4 py-2 shadow-md shadow-gray-300'>
          <div>Weddings</div>
          <div className='flex border-l-2 h-7'></div>
          <div>Graduations</div>
          <div className='flex border-l-2 h-7'></div>
          <div>Events</div>
          <button className='bg-mid rounded-full '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </button>

        </div>
        <div className='flex border bordger-gray-300 rounded-full items-center gap-2 px-4 py-2 shadow-md shadow-gray-300'>
          <Link to={"/login"}><div>Login</div></Link>
          
          <div className='flex border-l-2 h-7'></div>
          <Link to={"/register"}>Sign Up</Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar