import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { Loader } from './'

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-500 text-sm font-light text-white'

const Welcome = () => {

    const connectWallet = () => {

    }

    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1 font-bold [text-shadow:_5px_5px 5px_0_rgb(255_255_255_/_40%)]'>
                        XPLR the <br /> W3B
                    </h1>
                    <p className='text-left mt-3 text-white font-light w-11/14 text-base'>
                        Explore the Ethereum blockchain with W3BXPLR
                    </p>
                    <button
                        type='button'
                        onClick={connectWallet}
                        className='cursor-pointer flex flex-row justify-center items-center my-5 p-3 rounded-full hover:shadow-[#109ee0] shadow-lg text-white border border-sky-500'
                    >
                        <p className='text-base font-semibold'>Connect Wallet</p>
                    </button>

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'></div>
                        <div className={`rounded-tl-2xl ${commonStyles}`}>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome