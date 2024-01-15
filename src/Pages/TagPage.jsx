import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='mx-auto w-[700px] -mb-16'>
            <button className='cursor-pointer border-2 border-black px-2  mb-[-20px] mt-24'
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2 className='text-[20px]'>
                Blogs Tagged <span className='font-bold'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  ) 
}

export default TagPage
