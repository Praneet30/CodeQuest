import React from 'react'
import signupimage from '../signupimage3.png';
import Header from './Header';

const Signup = () => {
    
  return (
    <>
  <Header/>
    <div className="min-h-screen flex items-center justify-center mx-auto px-6 py-20 bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl w-full">
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
            //   value={username}
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
            {/* {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>} */}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
            //   value={email}
              className= "w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
            {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>} */}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
            {/* {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>} */}
          </div>
          <div className="mb-6">
            <label htmlFor="contact" className="block text-gray-700 font-semibold">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
            //   value={contact}
            //   onChange={(e) => setContact(e.target.value)}
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
            {/* {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>} */}
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {/* {loading && <p className="mt-4 text-center font-semibold text-gray-500">Loading...</p>} */}
       
      </div>
      <div className="hidden md:block w-1/2">
      
        <img src={signupimage} alt="Signup" className="object-contain w-full h-full" />
      </div>
     
    </div>
  </div>

  </>
  )
}

export default Signup