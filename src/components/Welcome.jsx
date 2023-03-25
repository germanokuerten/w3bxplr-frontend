import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { Loader } from './'

const Welcome = () => {
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
                    
                </div>
            </div>
        </div>
    )
}

export default Welcome