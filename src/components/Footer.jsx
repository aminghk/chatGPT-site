import React from 'react'
import Logo from './Logo'



function Footer() {

    return (
        <div className="flex flex-col">
            <div className='flex flex-row w-full border-t-[1px]  border-[#303030]  mt-8  bg-black items-center justify-center pt-8'>
                <div className='flex flex-col w-5/6   pt-8'>
                    <div className='flex'>
                        {/* left side */}
                        <div className="flex flex-col w-1/2">
                            <div className="flex items-center justify-start p-4">
                                <text className='text-2xl text-white font-[SF Pro Display] '>
                                    We would love to hear from you. Let’s work — together <br /> with Reload
                                </text>

                            </div>
                            <div className="flex items-center justify-start p-4">
                                <div className="flex flex-row items-center justify-center rounded-3xl px-8 py-2  bg-black border-[1px] border-white">
                                    <text className='text-sm text-white font-[SF Pro Display] '>
                                        Contact us
                                    </text>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="flex flex-col w-1/2">
                            <div className="flex w-full justify-around items-stretch ">
                                <div className="flex  w-full p-4">
                                    <div className="flex flex-col space-y-4">
                                        <text className='text-2xl text-white font-[SF Pro Display] '>
                                            Business requires
                                        </text>
                                        <div>
                                            <text className='text-xl text-[#B3B3B3] font-[SF Pro Display] '>
                                                hello@colstic.com
                                            </text>
                                            <text className='text-xl text-[#B3B3B3] font-[SF Pro Display] '>
                                                +27 123 456 789
                                            </text>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex w-full p-4">
                                    <div className="flex flex-col space-y-4">
                                        <text className='text-2xl text-white font-[SF Pro Display] '>
                                            Open positions
                                        </text>
                                        <div>
                                            <text className='text-xl text-[#B3B3B3] font-[SF Pro Display] '>
                                                Junior Graphic Design
                                            </text>
                                            <text className='text-xl text-[#B3B3B3] font-[SF Pro Display] '>
                                                Videography
                                            </text>
                                            <text className='text-xl text-[#B3B3B3] font-[SF Pro Display] '>
                                                Photography
                                            </text>
                                     </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full justify-around items-stretch">
                                <div className="flex items-center justify-center p-4">
                                    <div className="flex flex-col space-y-4">
                                        <text className='text-2xl text-white font-[SF Pro Display] '>
                                            London
                                        </text>
                                        <text className='text-xl text-[#B3B3B3] font-[SF Pro Display] '>
                                            133A Rye lane London SE15 4BQ <br />
                                            UK
                                        </text>

                                    </div>
                                </div>
                                <div className="flex items-center justify-center p-4">
                                    <div className="flex flex-col space-y-4">
                                        <text className='text-2xl text-white font-[SF Pro Display] '>
                                            Cape town
                                        </text>
                                        <text className='text-xl text-[#B3B3B3] font-[SF Pro Display] '>
                                            14 Upper pepper street CBD, 8001 <br />
                                            Cape Town
                                        </text>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-row w-full border-t-[1px] border-b-[1px] border-[#303030]  mt-8 mb-8 bg-black items-center justify-center py-8'>
                <div className="flex flex-row   w-5/6">

                    <div className="flex flex-col w-1/2 justify-start ">
                        <div className="flex flex-row  ">
                            <text className='text-2xl text-reloadCyan font-[SF Pro Display] font-bold'>reload</text>
                            <text className='text-2xl text-white font-[SF Pro Display] font-bold'>.case</text>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 ">
                        <div className="flex justify-between  ">
                            <div className="flex flex-col">
                                <text className='text-2xl text-white font-[SF Pro Display] '>
                                    DRIBBBLE
                                </text>
                            </div>
                            <div className="flex flex-col">
                                <text className='text-2xl text-white font-[SF Pro Display] '>
                                    INSTAGRAM
                                </text>
                            </div>
                            <div className="flex flex-col">
                                <text className='text-2xl text-white font-[SF Pro Display] '>
                                    LINKEDIN
                                </text>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Footer