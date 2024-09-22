import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl py-10 mx-auto flex gap-32'>
        <div className='basis-1/2'>
        <h1 className='text-[12rem]  font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
        <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
            {["instagram","twitter (x?)", "LinkedIn"].map((item,index)=>
            <a key={index} className='block mt-3 text-zinc-600 capitalize' href="">{item}</a>
            )}
        </div>
        <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
            {["instagram","twitter (x?)", "LinkedIn"].map((item,index)=>
            <a key={index} className='block mt-3 text-zinc-600 capitalize' href="">{item}</a>
            )}
        </div>
        <div className='basis-1/2 flex flex-col items-end'>
            <p className='text-right'>News and Insights on Web Design, Webflow Development, and Creative Development.</p>
            <img className="w-32 mt-10" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
