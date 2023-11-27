import React from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className=' padding-container mx-auto '>
          <div className=' flex flex-col-reverse md:flex-row md:pt-6 md:items-center'>
            <div className='flex-1 pt-6 md:pt-0 md:pr-3'>
              <div className='h1 font-extrabold  tracking-tight text-accent'>
                Unite for a Greener World
              </div>
              <div className=' h2  tracking-wider py-6'>
                Connecting Buyers and Sellers for a Sustainable Tomorrow.
              </div>
              <div>
                <button className='btn bg-accent text-white'>
                Connect With People
                </button>
                </div>
            </div>
            <div className='flex-1 w-full h-96 rounded-lg overflow-hidden'>
              <img className='w-full h-full object-cover object-center ' src='./src/assets/hero-image.jpg' alt=''/>
            </div>
          </div>

          <Features/>

          <div className='relative flex flex-col md:flex-row-reverse items-center pt-16 gap-y-10 md:justify-around'>
            <div className=' text-center'>
              <div className=' text-accent font-extrabold h1'>
                POPULAR
              </div>
              <div className=' text-accent2 font-semibold h2'>
                Products
              </div>
            </div>
            <div className=' md:w-[50%] w-full '>
                  <img src="/src/assets/popular.jpg" alt="" />
                  <div className='absolute bottom-0 w-full md:w-[50%] h-60  md:h-96 bg-gradient-to-b from-transparent to-white'></div>
                  <div className='flex justify-center'>
                  <button className=' btn text-white bg-accent absolute bottom-10 '>See all</button>
                  </div>
            </div>
          </div>

          <div className='relative flex flex-col md:flex-row items-center pt-28 gap-y-10 justify-around mb-32'>
            <div className=' text-center'>
              <div className=' text-accent font-extrabold h1'>
                MONTHLY
              </div>
              <div className=' text-accent2 font-semibold h2'>
                LeaderBoards
              </div>
            </div>
            <div className=' '>
                  <img src="/src/assets/leaderboards.png" alt="" className='rounded-lg' />
                  <div className='absolute bottom-0 w-full md:w-[50%] h-60  md:h-96 bg-gradient-to-b from-transparent to-white'></div>
                  <div className='flex justify-center'>
                  <button className=' btn text-white bg-accent absolute bottom-10 '>See all Leaders</button>
                  </div>
            </div>
            
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home