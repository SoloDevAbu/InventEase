import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section className='pt-20 pb-4 mx-4 md:mx-28 text-lg place-items-center'>
        <div className='container py-16 px-4 md:px-10'>
            <h1 className='text-center text-4xl md:text-8xl font-caveat font-light'>A modern <span className='underline underline-offset-4'>Inventory Management</span> System</h1>
        </div>

        <div className='container justify-center px-4 md:px-20 pb-4'>
            <div className='place-items-center mb--10'>
                <p className='pb-6 px-4 md:px-14 text-gray-500 text-xl md:text-2xl text-center'>Reduce stockouts, speed up operations, optimize routes and get real time visibility with <span className='text-blue-700'>InventEase</span>.</p>
                
                <div className='flex flex-col md:flex-row justify-center gap-4 pt-6 font-sans font-semibold'>
                  <p className='text-white'>
                    <button className='w-full md:w-auto px-4 py-4 rounded-lg bg-color-btn hover:bg-color-btnHover' onClick={() => {
                      navigate('/signup')
                    }}>Get Started for Free</button>
                  </p>
                  <p className='hover:text-white'>
                    <button className='w-full md:w-auto py-4 px-8 hover:bg-color-btnHover rounded-lg' onClick={() => {
                      navigate('/login')
                    }}>Login</button>
                  </p>
                </div>
            </div>
        </div>
        <div className='items-center pt-3'>
          <p className='text-gray-500 text-sm font-sans font-medium'>Free forever with <span className='text-green-600'>unlimited</span> stufs</p>
        </div>
    </section>
  )
}

export default Welcome