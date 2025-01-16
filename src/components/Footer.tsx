import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='my-28 mx-10'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-2xl text-blue-950'>Bandage</h2>
                    <div className="connect flex gap-5 items-center">
                        <FaFacebook className='w-[24px] h-[24px] text-[#23A6F0]' />
                        <FaInstagram className='w-[24px] h-[24px] text-[#23A6F0]' />
                        <FaTwitter className='w-[24px] h-[24px] text-[#23A6F0]' />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer