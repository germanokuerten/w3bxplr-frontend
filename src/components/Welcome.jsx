import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import axios from "axios"
import SearchResults from './SearchResults'
import { useState, useEffect } from 'react'
import { Loader } from './'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

// Option for more wallets
const providerOptions = {
}

const Welcome = () => {

    const [showResult, setShowResult] = useState(false) // false when we start
    const [result, setResult] = useState([])
    const [address, setAddress] = useState("");
    const [searchInput, setSearchInput] = useState("")
    const [web3Provider, setWeb3Provider] = useState(null)

    async function connectWallet() {
        try {
            let web3Modal = new Web3Modal({
                cacheProvider: false,
                providerOptions,
            })
            const web3ModalInstance = await web3Modal.connect()
            const web3ModalPRovider = new ethers.providers.Web3Provider(web3ModalInstance)
            if(web3ModalPRovider){
                setWeb3Provider(web3ModalPRovider)
                setAddress(web3ModalPRovider.provider.selectedAddress)
                // console.log(web3ModalPRovider.provider.selectedAddress)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = async () => {
        document.querySelector("#inputField").value = "";

    const response = await axios.get("https://w3bxplr-backend.vercel.app/address", {
        params: { address: searchInput || address },
    });
        setResult(response.data.result)
        setShowResult(true)
        console.log(response.data.result)
    }

    return (
        <div>
            <div className='flex w-full justify-center items-center'>
                <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                    <div className='flex flex-1 justify-start flex-col md:mr-10'>
                        <h1 className='text-4xl sm:text-5xl text-white text-gradient py-1 font-bold [text-shadow:_5px_5px 5px_0_rgb(255_255_255_/_40%)]'>
                            XPLR <br /> the W3B
                        </h1>
                        <p className='text-left mt-3 text-white font-light w-11/14 text-base'>
                            Explore the Ethereum blockchain with W3BXPLR.com
                        </p>
                        <br />
                        { 
                            web3Provider === null ? (
                                <button
                                    type='button'
                                    onClick={connectWallet}
                                    className='cursor-pointer flex flex-row justify-center items-center my-5 p-3 rounded-full hover:shadow-[#109ee0] shadow-lg text-white border border-sky-500'
                                    >
                                    <p className='text-base font-semibold'>Connect Wallet</p>
                                </button>
                            ) : (
                                <button
                                    type='button'
                                    onClick={connectWallet}
                                    className='cursor-pointer flex flex-row justify-center items-center my-5 p-3 rounded-full hover:shadow-[#109ee0] shadow-lg text-white border border-sky-500'
                                    >
                                    <p className='text-base font-semibold'>Wallet Connected</p>
                                </button>
                            ) 
                        }
                        <br />
                        <form class="flex items-center">
                            <label for="voice-search" class="sr-only">Search</label>        
                            <input 
                                className="placeholder:italic placeholder:text-slate-400 block w-full border border-slate-400 rounded-l-md sm:rounded-l-md py-1.5 sm:py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-[#100F15] text-white" 
                                type="text" id="inputField" 
                                name="inputField" 
                                maxLength="120" 
                                placeholder="Search by Wallet Address" required 
                                defaultValue={address}
                                onChange={changeHandler} 
                            />
                            <button 
                                type='button'
                                className="cursor-pointer flex flex-row justify-center items-center my-5 py-2 pl-3 pr-3 rounded-r-md hover:shadow-[#109ee0] shadow-lg text-white border border-sky-500" 
                                onClick={handleSearch}             
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <p className='text-base font-semibold'></p>
                            </button>
                        </form>
                        {showResult && <SearchResults result={{ result, searchInput }} />}
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Welcome