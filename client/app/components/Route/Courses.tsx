import React from 'react'
import { useGetUsersAllCoursesQuery } from '@/redux/features/courses/coursesApi'
import { useEffect, useState } from 'react'
import CourseCard from "../Course/CourseCard";

type Props = {}

const Courses = (props: Props) => {
    const { data, isLoading } = useGetUsersAllCoursesQuery({})
    const [courses, setCourses] = useState<any[]>([])
    useEffect(() => {
        setCourses(data?.courses)
    }, [data])
    return (
        <div>
            <div className={`w-full m-auto min-h-screen mt-[75px]`}>
                <h1 className='text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-[#000] font-[700] tracking-tight'>
                    Expand Your Career {" "}
                    <span className='text-gradient'>Opportunity</span><br />
                    Opportunity With Our Courses
                </h1>
                <br />
                <br />
                <div className='grid grid-cols-1 gap-[20px] md:grid-grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0'>
                    {
                        courses && courses.map((item: any, index: number) => (
                                <>
                                <CourseCard
                                    item={item}
                                    key={index}

                                />
                                {/* <CourseCard
                                item={item}
                                key={index}

                                /> */}
                            </>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Courses