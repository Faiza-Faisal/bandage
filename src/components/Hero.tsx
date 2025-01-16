import Image from 'next/image'
import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className='bg-[#00BFFF] flex h-[88vh]'>
        <div className=" w-[50%] pl-6 mt-28 left-side text-white">
          <p className='text-md font-bold my-4'>SUMMER 2020</p>
          <h1 className='text-5xl font-bold  my-10'>NEW COLLECTION</h1>
          <p className='text-xl font-extralight my-4'>We know how large objects will act,<br />
            but things on a small scale.</p>
          <button className='bg-[#71e2a9] p-2 rounded-lg w-40 font-semibold'>SHOP NOW</button>
        </div>
        <div className="right-side">
          <Image src={"/bandage-hero-pictrue.png"} width={500} height={500} alt='Maybe a girl standing with some shopping bags'></Image>
        </div>
      </div>
      <div className='mt-28'>
        <h2 className='text-2xl font-bold text-blue-950 text-center'>EDITOR'S PICK</h2>
        <p className='text-[#737373] text-lg text-center mb-28'>Problems trying to resolve the conflict between </p>
        <div className=" ml-24 image">
          <Image src={'/images.jpg'} alt='some images' width={1000} height={1000}></Image>
        </div>
      </div>
      <div className='mt-28'>
        <p className='text-[#737373] text-xl my-2  text-center'>Featured Products</p>
        <h2 className='text-[#252B42] text-2xl font-bold my-4  text-center'>BESTSELLER PRODUCTS</h2>
        <p className='text-[#737373] text-lg text-center mb-28'>Problems trying to resolve the conflict between </p>
        <div className="images grid grid-cols-4 ml-16">

          <div>
            <Image src={'/box1.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>

          <div>
            <Image src={'/box2.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>
          <div>
            <Image src={'/box3.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>
          <div>
            <Image src={'/box4.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>
        </div>
        <div className="images grid grid-cols-4 ml-16 my-8">

          <div>
            <Image src={'/box5.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>

          <div>
            <Image src={'/box6.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>
          <div>
            <Image src={'/box7.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>
          <div>
            <Image src={'/box8.jpg'} alt='image alt' width={200} height={200}></Image>
            <h3 className='text-[#252B42] text-xl font-extrabold ml-2 my-4'>Graphic Design</h3>
            <p className='text-[#737373] text-md font-bold ml-2 my-4'>English Department</p>
            <p className='text-[#b4b4b4] text-md font-bold ml-4 inline'>$16.48</p>
            <p className='text-md font-bold ml-2 text-[#23856D] inline'>$6.48</p>
          </div>
        </div>
      </div>
      <div className='bg-[#20A487] flex'>
        <div className="left-side w-[50%] text-white p-6 ml-20 pt-20">
          <p className='font-extralight text-xl my-3'>SUMMER 2020</p>
          <h1 className='font-bold text-5xl my-8'>Vita Classic <br /> Product</h1>
          <p className='font-extralight text-md my-8'>We know how large objects will act, We know <br /> how are objects will act, We know</p>
          <div className="extras flex justify-around items-center w-[50%]">
            <p className='font-bold text-2xl my-8'>$16.48</p>
            <button className='bg-[#13D997] h-14 px-4 rounded-lg font-bold'>ADD TO CART</button>
          </div>
        </div>
        <div className="right-side">
          <Image src={'/shop-now-image.png'} alt='man thinking' width={400} height={400}></Image>
        </div>
      </div>
      <div className='mb-28 flex'>

        <div className="left-side mt-20 w-[50%] ml-20">
          <Image src={'/buy-now.jpg'} alt='man thinking' width={450} height={450}></Image>
        </div>
        <div className="right-side w-[50%]  p-6  pt-20">
          <p className='font-bold text-[#BDBDBD] text-md my-3'>SUMMER 2020</p>
          <h1 className='font-bold text-5xl my-8'>Part of the Neural <br />
            Universe </h1>
          <p className='text-[#737373] font-bold text-xl my-8'>We know how large objects will act, <br />
            but things on a small scale.</p>
          <div className="extras flex justify-around items-center w-[50%]">

            <button className='bg-[#13D997] text-white h-14 px-4 rounded-lg font-bold'>BUY NOW</button>
            <button className=' text-[#13D997] font-bold  my-8 border h-14 border-[#13D997] rounded-lg px-4'>READ MORE</button>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-[#23A6F0] font-bold my-2 text-md'>Practice Advice</p>
        <h2 className='text-[#252B42] text-5xl font-bold my-6'>Featured Posts</h2>
        <p className='text-[#737373] font-extralight text-lg my-8'>Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="images grid grid-cols-3 gap-5 mx-8">
          <div>
            <Image src={'/box10.jpg'} alt='image alt' className='ml-2' width={350} height={350}></Image>
            <div className="faltukicheezen flex items-center justify-start pl-4 mt-6 gap-3 w-[70%]">
              <p className='text-[#8EC2F2] text-md font-extralight'>Google</p>
              <p className='text-[#737373] text-md font-extralight'>Trending</p>
              <p className='text-[#737373] text-md font-extralight'>New</p>
            </div>
            <h3 className='text-[#252B42] font-extralight text-2xl text-left pl-4 my-2'>Loudest à la Madison #1 <br />
              (L'integral)</h3>
            <p className='text-[#737373] font-semibold text-left pl-4 my-2'>We focus on ergonomics and meeting <br />
              you where you work. It's only a <br />
              keystroke away.</p>
            <div className="px-4 my-6 extras flex items-center justify-between">
              <div className="date flex items-center justify-between">
                <CiAlarmOn className='text-[#23A6F0] mx-2' />
                <p className='text-[#737373]'>22 April 2021</p>
              </div>
              <div className="date flex items-center justify-between">
                <AiOutlineStock className='text-[#23856D] mx-2' />
                <p className='text-[#737373]'>10 comments</p>
              </div>
            </div>
            <div className="learn-more pl-4 flex items-center gap-5 text-lg">
            <p className='text-[#737373] font-bold'>Learn More </p>
            <FaAngleRight className='text-[#23A6F0]'/>
            </div>
          </div>
          <div>
            <Image src={'/box9.jpg'} alt='image alt' className='ml-2' width={350} height={350}></Image>
            <div className="faltukicheezen flex items-center justify-start pl-4 mt-6 gap-3 w-[70%]">
              <p className='text-[#8EC2F2] text-md font-extralight'>Google</p>
              <p className='text-[#737373] text-md font-extralight'>Trending</p>
              <p className='text-[#737373] text-md font-extralight'>New</p>
            </div>
            <h3 className='text-[#252B42] font-extralight text-2xl text-left pl-4 my-2'>Loudest à la Madison #1 <br />
              (L'integral)</h3>
            <p className='text-[#737373] font-semibold text-left pl-4 my-2'>We focus on ergonomics and meeting <br />
              you where you work. It's only a <br />
              keystroke away.</p>
            <div className="px-4 my-6 extras flex items-center justify-between">
              <div className="date flex items-center justify-between">
                <CiAlarmOn className='text-[#23A6F0] mx-2' />
                <p className='text-[#737373]'>22 April 2021</p>
              </div>
              <div className="date flex items-center justify-between">
                <AiOutlineStock className='text-[#23856D] mx-2' />
                <p className='text-[#737373]'>10 comments</p>
              </div>
            </div>
            <div className="learn-more pl-4 flex items-center gap-5 text-lg">
            <p className='text-[#737373] font-bold'>Learn More </p>
            <FaAngleRight className='text-[#23A6F0]'/>
            </div>
          </div>
          <div>
            <Image src={'/box11.jpg'} alt='image alt' className='ml-2' width={350} height={350}></Image>
            <div className="faltukicheezen flex items-center justify-start pl-4 mt-6 gap-3 w-[70%]">
              <p className='text-[#8EC2F2] text-md font-extralight'>Google</p>
              <p className='text-[#737373] text-md font-extralight'>Trending</p>
              <p className='text-[#737373] text-md font-extralight'>New</p>
            </div>
            <h3 className='text-[#252B42] font-extralight text-2xl text-left pl-4 my-2'>Loudest à la Madison #1 <br />
              (L'integral)</h3>
            <p className='text-[#737373] font-semibold text-left pl-4 my-2'>We focus on ergonomics and meeting <br />
              you where you work. It's only a <br />
              keystroke away.</p>
            <div className="px-4 my-6 extras flex items-center justify-between">
              <div className="date flex items-center justify-between">
                <CiAlarmOn className='text-[#23A6F0] mx-2' />
                <p className='text-[#737373]'>22 April 2021</p>
              </div>
              <div className="date flex items-center justify-between">
                <AiOutlineStock className='text-[#23856D] mx-2' />
                <p className='text-[#737373]'>10 comments</p>
              </div>
            </div>
            <div className="learn-more pl-4 flex items-center gap-5 text-lg">
            <p className='text-[#737373] font-bold'>Learn More </p>
            <FaAngleRight className='text-[#23A6F0]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero