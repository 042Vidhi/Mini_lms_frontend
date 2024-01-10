import React from 'react'
import Navbar from '../components/Navbar'
import CourseCard from '../components/CourseCard'
import FavoriteIcon from '@mui/icons-material/Favorite';
import hero_image from '../assets/Course_hero.png'
import courseContentList from '../utils/AllCourses';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
        <Navbar/>
        <section className=" bg-white">
        <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl xl:text-5xl font-bold xl:leading-[4rem]">
            Learn from anywhere, anytime{" "}
            <br />
            <span className=" py-1 px-6 border-4 border-purple-300  inline-block rounded-md">
              Courses
              {/* <CircleIcon className="text-purple-300 text-base absolute -left-5 -top-5 p-2  rounded-full box-content" />
              <CircleIcon className="text-purple-300 text-base absolute -right-5 -top-5 p-2  rounded-full box-content" />
              <CircleIcon className="text-purple-300 text-base absolute -right-5 -bottom-5 p-2  rounded-full box-content" />
              <CircleIcon className="text-purple-300 text-base absolute -left-5 -bottom-5 p-2  rounded-full box-content" /> */}
            </span>
          </h1>
          <p className="text-gray-500 text-lg leading-[1.5rem]">
          Mini_LMS is a great solution for leaders who want to deliver personalized learning experiences. 
          The system allows structured learning paths for skills development with assessment options for demonstrated behavioral change.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="#allcourses">
            <button className="w-full xl:w-auto bg-purple-600 text-white py-2 px-8 rounded-xl text-xl">
            
              Explore Courses
            </button>
            </a>
            <Link to="/login">
            <button className="w-full text-slate-400 bg-purple-100 border-[1px] border-purple-300 xl:w-auto text-center gap-4 py-2 px-8 rounded-xl text-xl">
              {/* <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "} */}
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center ">
        {/* Content image */}
        <div>
          <img
            src={hero_image}
            alt="hero_image"
            className="w-[250px] md:w-[450px]  object-cover xl:-mt-28"
          />
          </div>
        </div>
        </section>
            
        </section>
        <section id='allcourses' className='bg-slate-50'>
            <p className='text-center p-2 text-4xl xl:text-5xl font-bold xl:leading-[4rem] pb-8'>All Courses</p>
        <div className="flex justify-center items-center flex-wrap gap-4 pb-4">
        {courseContentList.map((Course) => (
            <CourseCard key={Course.courseId} Course={Course} id={Course.courseId} />
          ))}
           
        </div>
     
        </section>
        <footer>
            <div className='h-1/3 bg-purple-900'>
            <div className="footer flex flex-col text-slate-200 justify-between items-center p-4">
                
                    <div>Mini_LMS</div>
                    
                    <p className='font-medium text-xl pb-4'>Learn from anywhere, anytime</p>
                    <div className=" flex flex-col text-sm items-center">
                    <p>Made with 
                        <FavoriteIcon className='text-rose-400'/>
                        by VJ
                    </p>
                    <p>Copyright @2024</p>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Home