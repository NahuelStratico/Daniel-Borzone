import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return(
    <div className='fixed bg-white border shadow w-full z-10'>
      <div className='flex justify-between items-center p-4 text-black'>
        <Link href={'/'}>
          <h1 className='font-bold text-4xl'>Daniel Borzone</h1>
        </Link>
        <ul className='hidden sm:flex'>
          <li className='p-4 hover:text-gray-500'>
            <Link href="/">Home</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 hover:cursor-pointer'>
          {nav ? <AiOutlineClose size={20} className='text-white'/> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div className={
          nav ? 'sm:hidden absolute top-0 left-0 right-0 buttom-0 flex justify-center items-center bg-black w-full h-screen text-center text-white ease-in duration-300' 
          :
          'sm:hidden absolute top-0 left-[-100%] right-0 buttom-0 flex justify-center items-center bg-black w-full h-screen text-center text-white ease-in duration-300' 
        }>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar