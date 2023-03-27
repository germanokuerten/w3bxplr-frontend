import { useEffect, useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import axios from "axios";
import logo from '../../images/logo2.png'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [ethPrice, setEthPrice] = useState("")

    useEffect(() => {
        const getethprice = async () => {
            const response = await axios.get('https://w3bxplr-backend.vercel.app/getethprice', {})
            setEthPrice(response.data.usdPrice)
        }
        getethprice()
    })

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.95] flex-initial justify-center items-center'>
                <a href="https://www.w3bxplr.com" alt="w3bxplr" className='inline-block'>
                <img src={logo} alt="logo" className='w-40 cursor-pointer rounded-tl rounded-br hover:shadow-[#109ee0] shadow-lg mt-2 -mb-3'/>
                </a>
            </div>
            {/* <div className="flex mt-10 text-white font-light w-11/14 text-xs sm:text-sm -ml-12">
                {`ETH price: $${Number(ethPrice).toFixed(2)}`}
            </div> */}
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial mx-4 mt-2'>
                <li className='cursor-pointer py-2 px-3 mx-3 rounded-tl rounded-br hover:shadow-[#109ee0] shadow-lg border border-sky-600'><a href="https://github.com/germanokuerten/w3bxplr-frontend" target="_blank">GitHub</a></li>
                <li className='cursor-pointer py-2 px-3 mx-3 rounded-tl rounded-br hover:shadow-[#109ee0] shadow-lg border border-sky-600'><a href="https://www.linkedin.com/in/germanokuerten/" target="_blank">LinkedIn</a></li>
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
                        <li className='cursor-pointer py-2 px-5 mx-3 hover:shadow-[#109ee0] shadow-lg my-2 text-lg'><a href="https://github.com/germanokuerten/w3bxplr-frontend" target="_blank">GitHub</a></li>
                        <li className='cursor-pointer py-2 px-5 mx-3 hover:shadow-[#109ee0] shadow-lg'><a href="https://www.linkedin.com/in/germanokuerten/" target="_blank">LinkedIn</a></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar