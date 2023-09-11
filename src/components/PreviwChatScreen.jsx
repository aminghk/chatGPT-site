import React from 'react'
import LeftArrowSVG from '../assets/svg/LeftArrowSVG'
import LittleCircleSVG from '../assets/svg/LittleCircleSVG'
import RightArrowSVG from '../assets/svg/RightArrowSVG'
import SendMessageButton from '../assets/svg/SendMessageButton'
import ChatCard from './ChatCard'
import { Link } from "react-router-dom";
import Logo from './Logo'

function PreviwChatScreen({ continueRef }) {
    return (
        <div ref={continueRef} className='flex flex-col items-center w-full bg-black'>

            <div className='flex flex-col  w-5/6'>

                {/* texts and lets start button */}
                <div className='flex flex-col '>
                    <div className="flex flex-row items-center justify-start ">
                        <text className='text-6xl text-reloadCyan font-[SF Pro Display] font-bold'>Start chatting with</text>
                        <text className='text-6xl text-white font-[SF Pro Display] font-bold ml-2'>AI.</text>
                    </div>
                    <div className="flex flex-row items-center justify-start py-4">
                        <text className='text-xl text-white/70 font-[SF Pro Display] '>
                            Chat about any topic with ChatGPT in any time. It can
                            <br />
                            be your friend, tutor or therapist.</text>
                    </div>
                    
                        <div className="flex flex-row items-center justify-start mt-4 py-4 space-x-2   ">
                        <Link className='flex items-center justify-center space-x-2' to="/chat">
                            <text className='text-xl text-reloadCyan font-[SF Pro Display] '>
                                Let’s start chat
                            </text>
                            <RightArrowSVG />
                        </Link>
                        </div>

                    
                </div>

                {/* chat screen */}
                <div className='flex flex-row  w-full border-2 border-white rounded-2xl p-4 mt-4'>
                    {/* left side */}
                    <div className='flex flex-col w-1/2 relative bg-[#121212] justify-stretch rounded-tl-2xl rounded-bl-2xl'>

                        <div className="flex flex-row items-center justify-start mt-4 ml-4 px-10 py-4 space-x-2 " >
                            <LeftArrowSVG />
                            <text className='text-xl text-reloadCyan font-[SF Pro Display] font-bold'>back</text>
                        </div>

                        <div className='flex flex-col absolute w-max h-max p-2 space-y-4 mt-64 ml-36   '>
                            <div className="flex flex-row items-center justify-center ">
                                <text className='text-6xl text-reloadCyan font-[SF Pro Display] font-bold'>AI</text>
                                <text className='text-6xl text-white font-[SF Pro Display] font-bold ml-2'>ChatBot</text>

                            </div>
                            <div className="flex flex-row items-center justify-center ">
                                <text className='text-xl text-center text-white/70 font-[SF Pro Display] '>
                                    We’ve trained a model called  <br />ChatGPT which interacts in a  <br />conversational way.
                                </text>
                            </div>
                        </div>

                        <div className='flex flex-row '>
                            <LittleCircleSVG />
                        </div>




                    </div>


                    {/* right side  */}
                    <div className="flex flex-col w-1/2 px-12" >
                        <div className="flex flex-row items-center justify-start py-4">
                            <Logo />
                        </div>
                        <div className=' h-full flex flex-col justify-end'>

                            <div className="flex flex-col items-center justify-start py-4">
                                <ChatCard
                                    text='I want you to act as a motivational speaker. Put together words that inspire action and make people feel.'
                                    userName='Amin'
                                    isSenderGBT={false}
                                />
                                <ChatCard
                                    text="Since an open-air tennis tournament in Paris is likely to take place in the summer, it' s important to wear clothing."
                                    isSenderGBT={true}
                                />
                            </div>
                            <div className="flex flex-row items-center justify-center py-4">
                                <div className="flex flex-row items-center justify-between 
                            bg-[#121212] border-[1px] border-reloadCyan rounded-full w-96 h-16 px-4
                            ">
                                    <div>
                                        <text className='text-lg text-white font-[SF Pro Display] '>
                                            Message
                                        </text>
                                        <text className='text-lg text-reloadCyan ml-1 font-[SF Pro Display] '>
                                            |
                                        </text>
                                    </div>
                                    <SendMessageButton />

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>





        </div>
    )
}

export default PreviwChatScreen