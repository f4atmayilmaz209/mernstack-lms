import React,{FC} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Ratings from '@/app/utils/Ratings';
import { AiOutlineUnorderedList } from 'react-icons/ai';

type Props = {
    item:any;
    isProfile?:boolean;
    user?:any
}

const CourseCard:FC<Props> = ({item,isProfile}) => {
  return (
    <Link href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}>
        <div className='w-full h-full dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner'>
            <Image src={item?.thumbnail?.url} objectFit="contain" className='rounded w-full' width={500} height={300} alt=""/>
            <br/>
            <h1 className='font-Poppins text-[16px] text-black dark:text-[#fff]'>
                {item.name}
            </h1>
            <div className='w-full flex items-center justify-between pt-2'>
                <Ratings rating={item.rating}/>
                <h5 className={`text-black dark:text-[#fff] ${isProfile && "hidden 800px:inline"}`}>
                    {item.purchased} Students
                </h5>
            </div>
            <div className='w-full flex items-center justify-between pt-3'>
                <div className='flex'>
                    <h3 className='text-black dark:text-[#fff]'>
                        {item.price===0 ? "Free" : item.price+"$"}
                    </h3>
                    <h5 className='pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]'>
                        {item.estimatedPrice}$
                    </h5>

                </div>
                <div className='flex items-center pb-3'>
                    <AiOutlineUnorderedList size={20} fill="#fff"/>
                    <h5 className='pl-2 text-black dark:text-[#fff]'>

                    </h5>

                </div>
            </div>

        </div>
    
    </Link>
  )
}

export default CourseCard