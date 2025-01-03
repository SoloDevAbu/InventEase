import React from 'react'

const LoginForm = () => {
  return (
    <div className='pt-10'>
      <h1 className="text-4xl pb-5">InventEase</h1>
      <div className="container mx-auto md:px-5 bg-color-form rounded-3xl">
        <h1 className='text-center font-sans text-2xl'>Login</h1>
        <form className='space-y-3 p-6'>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-full shadow-sm hover:bg-blue-700">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm