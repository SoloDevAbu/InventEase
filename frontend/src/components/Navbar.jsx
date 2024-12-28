import { useNavigate } from 'react-router-dom'
import logo from '../assets/supply.png'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='flex bg-slate-300 px-16 py-2 fixed w-full justify-between items-center font-sans font-semibold'>
      <div className='size-8'>
        <img src={logo} alt="InventEase" />
      </div>

      <div className='flex justify-center flex-1'>
        <ul className='flex items-center gap-6'>
          <li className="inline-block">
            <a href="/" className="hover:text-gray-500">Inventory</a>
          </li>
          <li className='inline-block'>
            <a href="" className="hover:text-gray-500">Overview</a>
          </li>
          <li>
            <a href="" className="hover:text-gray-500">Features</a>
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-center gap-6'>
        <button className='hover:bg-slate-400 py-2 px-6 rounded-xl' onClick={() => {
          navigate('/login')
        }}>
          <a href="">Login</a>
        </button>

        <button className='bg-color-btn py-2 px-6 text-white font-sans rounded-xl hover:bg-color-btnHover' onClick={() => {
          navigate('/signup')
        }}>
          <a href="">Signup</a>
        </button>
      </div>

    </nav>
  )
}

export default Navbar