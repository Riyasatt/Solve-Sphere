import React from 'react'

const FeaturesCard = () => {
    const featuresList=[
        {
            id: 1,
            title: 'Connect Buyers and Sellers',
            description: 'This Platform connects both Seller and Buyer and helps to retain the Health of Nature.',
            img:"./src/assets/connect.png"
        },
        {
            id: 2,
            title: 'Monthly LeaderBoard',
            description: 'Be on the top of the LeaderBoards monthly to get some excited gifts and offers.',
            img :'./src/assets/leaderboard.png'
        },
        {
            id: 3,
            title: 'Your Local Shops',
            description: 'This Platform Automatically informs you about the local shops around your area that are connected with us.',
            img:"./src/assets/local.png"
        },
        {
            id: 4,
            title: 'Learn',
            description: 'This Platform also provides Educational Videos about conserving the Mother Earth.',
            img:"./src/assets/learn.png"
        },
    ]
  return (
    <div className='flex mx-10 flex-wrap pt-16 gap-5 items-center justify-center'>
        {featuresList.map((feat)=>{
            return(
                <div key={feat.id} className='flex flex-col-reverse p-6 items-center w-80 bg-white/50 rounded-lg'>
                    <div className='flex-1 pt-6  md:pr-3'>
                        <div className=' text-lg font-bold text-center tracking-tight text-accent'>
                            {feat.title}
                        </div>
                        <div className='  tracking-wider py-6'>
                            {feat.description}
                        </div>
                    </div>
                    <div className='flex-1 w-full h-96 rounded-lg overflow-hidden'>
                        <img className='w-full h-full object-cover object-center'src={feat.img} alt=''/>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default FeaturesCard