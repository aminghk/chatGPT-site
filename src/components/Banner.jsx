// import React from 'react'

// function Banner() {
//     return (
//         <div className='flex flex-col py-16 my-8'>
//             <div className=' bg-gradient-to-b py-20 from-[#1D1D1D] to-[#000000]'>
//                 <div className="flex flex-col items-center justify-center py-4 text-center">

//                     <text className='text-6xl text-white font-[SF Pro Display] font-bold'>Let’s start experiencing the  </text>
//                     <div>
//                         <text className='text-6xl text-white font-[SF Pro Display] font-bold'>new internet  </text>
//                         <text className='text-6xl text-reloadCyan font-[SF Pro Display] font-bold '>
//                             today.
//                         </text>
//                     </div>


//                 </div>
//                 <div className="flex flex-col items-center justify-center py-4 text-center">
//                     <div className="flex flex-row bg-reloadCyan w-1/4 rounded-full items-center justify-center mt-4 py-5">
//                         <text className='text-lg text-black font-[SF Pro Display] '>
//                             Get started for free
//                         </text>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Banner
import React from 'react';

function Banner() {
    return (
        <div className='flex flex-col py-8 md:py-16 my-8'>
            <div className='bg-gradient-to-b py-12 md:py-20 from-[#1D1D1D] to-[#000000]'>
                <div className='flex flex-col items-center justify-center py-4 text-center'>
                    <h1 className='text-4xl md:text-6xl text-white font-[SF Pro Display] font-bold'>
                        Let's start experiencing the new internet today.
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center py-4 text-center'>
                    <div className='flex flex-row bg-reloadCyan w-2/3 md:w-1/4 rounded-full items-center justify-center mt-4 py-3 cursor-pointer'>
                        <h2 className='text-lg text-black font-[SF Pro Display]'>
                            Get started for free
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
