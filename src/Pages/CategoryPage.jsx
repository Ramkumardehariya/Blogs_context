import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div className='mx-auto w-[700px] -mb-16'>
        <button className='cursor-pointer border-2 border-black px-2  mb-[-20px] mt-24'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2 className='text-[18px]'> 
            Blogs on <span className='font-bold'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
