import React from 'react'
import BigCricleSVG from '../assets/svg/BigCricleSVG'
import Logo from './Logo'

function Hero({ continueRef }) {
    const onclickContinue = () => {
        continueRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='flex flex-col bg-black'>
            {/* header & logo */}
            <Logo   />
            {/* hero */}
            <div className='flex flex-col h-[50vh] items-center justify-center'>
                <div className="flex flex-row items-center justify-center py-4 w-full">
                    <text className='text-6xl text-reloadCyan font-[SF Pro Display] font-bold'>
                        AI
                    </text>
                    <text className='text-6xl text-white font-[SF Pro Display] font-bold ml-2'>
                        Chatbot
                    </text>
                </div>
                <div className="flex flex-row items-center justify-center py-4">
                    <text className='text-xl text-white/70 font-[SF Pro Display] text-center'>
                        We’ve trained a model called ChatGPT which interacts
                        <br />
                        in a conversational way.</text>
                </div>
                <div className="flex flex-row items-center justify-center py-4">
                    <button onClick={onclickContinue} className='bg-white text-black font-[SF Pro Display] font-bold 
                    py-4 px-12 rounded-full'>
                        Continue
                    </button>
                   
                </div>
            </div>
            {/* white circles */}
            <BigCricleSVG />
        </div>
    )
}



export default Hero