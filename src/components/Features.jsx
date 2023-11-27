import React from 'react'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <>
        <div className=' min-w-full rounded-t-[50px] md:rounded-t-[100px] bg-gradient-to-b from-accent2/40 to-white pb-16  mt-16 md:mt-24 '>
            <div className='pt-16'>
                <div className='text-accent font-extrabold text-center heading'>
                    FEATURES we Offer
                </div>
                <div>
                    <FeaturesCard/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features