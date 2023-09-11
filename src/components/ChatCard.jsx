import React from 'react'

function ChatCard({ text, userName, isSenderGBT }) {
    
    return (
        <div className={`flex flex-row w-[400px] max-w-[400px] space-x-2 ${isSenderGBT ? 'bg-[#1A1A1A]' : 'bg-[#000000]'} p-4 rounded-lg mt-2`} >
            {/* photo containter */}
            <div className="flex flex-col">
                <div className={`flex flex-row
                items-center justify-center
                ${isSenderGBT ? 'bg-[#B6FBFF]' : 'bg-[#C8B6FF]'} w-8 h-8 rounded-full text-white`} >
                    {isSenderGBT ? '' : userName[0]}
                </div>
            </div>
            {/* message containter */}
            <div className="flex flex-col space-y-1 ">
                <div className="flex flex-row">
                    <text className={`${isSenderGBT ? 'text-[#B6FBFF]' : 'text-[#FFFFFF80]'} text-sm`}>{
                        isSenderGBT ? 'Chat GBT' : 'You'
                    }</text>
                    
                </div>
                <div className="flex flex-row">
                    <text className='text-white text-xs'>{text}</text>
                </div>
            </div>
        </div>
    )
}

export default ChatCard