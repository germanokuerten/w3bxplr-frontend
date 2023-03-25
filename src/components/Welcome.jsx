import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import axios from "axios"

import SearchResults from './SearchResults'

import { useState } from 'react'
import { Loader } from './'

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {

    const [showResult, setShowResult] = useState(false) // false when we start
    const [result, setResult] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = async () => {
        document.querySelector("#inputField").value = "";

    const response = await axios.get("https://w3bxplr-backend.vercel.app/address", {
        params: { address: searchInput },
    });

        setResult(response.data.result)
        setShowResult(true)
        console.log(response.data.result)
    }

    const connectWallet = () => {

    }

    return (
        <div>
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1 font-bold [text-shadow:_5px_5px 5px_0_rgb(255_255_255_/_40%)]'>
                        XPLR the <br /> W3B
                    </h1>
                    <p className='text-left mt-3 text-white font-light w-11/14 text-base'>
                        Explore the Ethereum blockchain with W3BXPLR
                    </p>

                    <br />
                    <input 
                        className="placeholder:italic placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-[#100F15] text-white" 
                        type="text" id="inputField" 
                        name="inputField" 
                        maxLength="120" 
                        placeholder="Search by Wallet Address" required 
                        onChange={changeHandler}
                    />
                    <button 
                            type='button'
                            className="cursor-pointer flex flex-row justify-center items-center my-5 p-3 rounded-full hover:shadow-[#109ee0] shadow-lg text-white border border-sky-500" 
                            onClick={handleSearch}
                        >
                            <p className='text-base font-semibold'>Search</p>
                    </button>
                    {/* <button
                        type='button'
                        onClick={connectWallet}
                        className='cursor-pointer flex flex-row justify-center items-center my-5 p-3 rounded-full hover:shadow-[#109ee0] shadow-lg text-white border border-sky-500'
                    >
                        <p className='text-base font-semibold'>Connect Wallet</p>
                    </button> */}

                    {/* Input */}

                    <div>
                    

                        
                        </div>
                        
                    {/* <div className='sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Block Information
                        </div>
                        <div className={commonStyles}>
                            Security
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            WEB 3.0
                        </div>
                        <div className={`${commonStyles}`}>
                            Low Fees
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div>
            
            {showResult && <SearchResults result={{ result, searchInput }} />}
        </div>
        </div>

       

        
    )
}

export default Welcome