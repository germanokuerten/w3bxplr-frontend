import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../../images/logo.png'

const NavbarItem = ({ title, classprops }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-40 cursor-pointer hover:shadow-[#109ee0] shadow-lg'/>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial mx-4'>
                {/* {["Github", "LinkedIn"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))} */}
                <li className='cursor-pointer py-2 px-3 mx-3 hover:shadow-[#109ee0] shadow-lg cursor-pointer'>GitHub</li>
                <li className='cursor-pointer py-2 px-3 mx-3 hover:shadow-[#109ee0] shadow-lg cursor-pointer'>LinkedIn</li>
            </ul>
            <div className='flex relative'>
                {toggleMenu 
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start rounded-md blue-glassmorphism text-white animate-slide-in'
                    >
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        <li className='cursor-pointer py-2 px-5 mx-3 hover:shadow-[#109ee0] shadow-lg cursor-pointer my-2 text-lg'>GitHub</li>
                <li className='cursor-pointer py-2 px-5 mx-3 hover:shadow-[#109ee0] shadow-lg cursor-pointer'>LinkedIn</li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar