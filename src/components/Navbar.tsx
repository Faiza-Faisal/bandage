import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-around h-16'>
                <h2 className='font-bold text-2xl text-blue-950'>Bandage</h2>
                <li className='flex gap-7 text-gray-500 w-[65%]'>
                    <ul className='cursor-pointer'>Home</ul>
                    <ul className='cursor-pointer'><select name="" id=""></select> Shops</ul>
                    <ul className='cursor-pointer'>About</ul>
                    <ul className='cursor-pointer'>Blog</ul>
                    <ul className='cursor-pointer'>Contact</ul>
                    <ul className='cursor-pointer'>Pages</ul>
                </li>
                <div className="login">
                    <p><a href="#" className="text-blue-500 font-semibold"><CiUser className="inline h-6 w-6" /> Login / Register</a></p>
                </div>
                <p className='extras text-blue-500 font-semibold flex gap-4 text-xl'>
                <CiSearch />
                <CiShoppingCart /> 
                <CiHeart /> 
                </p>
            </nav>
        </div>
    )
}

export default Navbar