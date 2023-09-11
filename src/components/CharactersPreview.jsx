import React from 'react'
import character1 from '../assets/images/character1.png'
import character2 from '../assets/images/character2.png'
import character3 from '../assets/images/character3.png'
import character4 from '../assets/images/character4.png'
import character5 from '../assets/images/character5.png'
import character6 from '../assets/images/character6.png'
import { Link } from "react-router-dom";

const data = [
    {
        imageSrc: character1,
        text: "Hitachi Digital Brand Ecosystem.",
    },
    {
        imageSrc: character2,
        text: "Stråbe",
    },
    {
        imageSrc: character3,
        text: "Commons.",
    },
    {
        imageSrc: character4,
        text: "Aeizei",
    },
    {
        imageSrc: character5,
        text: "Zvurçyk Fashion",
    },
    {
        imageSrc: character6,
        text: "Lancome",
    },
    {
        imageSrc: character1,
        text: "Hitachi Digital Brand Ecosystem.",
    },
    {
        imageSrc: character2,
        text: "Stråbe",
    },
    {
        imageSrc: character3,
        text: "Commons.",
    },
    {
        imageSrc: character4,
        text: "Aeizei",
    },
    {
        imageSrc: character5,
        text: "Zvurçyk Fashion",
    },
    {
        imageSrc: character6,
        text: "Lancome",
    },
];

function CharactersPreview() {

  
    return (
        <div className='flex flex-row w-full border-t-[1px] border-b-[1px] border-[#303030]  mt-8  bg-black items-center justify-center pt-8'>

            <div className='flex flex-col w-5/6   pt-8'>
                <div className="flex flex-row py-4">

                    {/* left side */}
                    <div className='flex flex-col w-1/2 border-r-[1px] border-[#303030] px-4  '>
                        {/* texts and lets start button */}
                        <div className='flex flex-col '>
                            <div className="flex flex-col items-start justify-start ">
                                <text className='text-6xl text-white font-[SF Pro Display] font-bold'>Chat with unique </text>
                                <text className='text-6xl text-reloadCyan font-[SF Pro Display] font-bold'>characters</text>
                            </div>
                            <div className="flex flex-row items-center justify-start py-4">
                                <text className='text-xl text-white/70 font-[SF Pro Display] '>
                                    You can chat many different characters for a few set
                                    <br />
                                    of topics and interests.</text>
                            </div>
                            <div className="flex flex-row bg-reloadCyan w-1/4 rounded-full items-center justify-center mt-4 py-5 cursor-pointer">
                                <Link to="/chat">
                                <text className='text-lg text-black font-[SF Pro Display] '>
                                    Let’s start chat
                                    </text>
                                </Link>

                            </div>
                        </div>
                        <div className="flex flex-row bg-[#212121] h-full  min-h-[300px] mt-8 w-full  rounded-3xl items-center justify-center ">

                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex flex-col w-1/2'>

                        <div className="grid px-8 grid-cols-2  gap-4 max-h-[800px] overflow-y-scroll ">
                            {data.map((item, index) => (
                                <GridItem key={index} data={item} />
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )

}


function GridItem({ data }) {
    return (
        <div className="flex flex-col items-start justify-center my-4">
            <img src={data.imageSrc} alt="" className="w-[275px] h-[280px]" />
            <text className="text-lg text-white font-[SF Pro Display] mt-4">
                {data.text}
            </text>
        </div>
    );
}


export default CharactersPreview