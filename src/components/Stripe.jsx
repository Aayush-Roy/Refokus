import React from 'react'

function Stripe({val,index}) {
  return (
    <div className='w-[16.66%] px-8 py-5 border-b-[1.2px] border-t-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between'>
      <img  src={val.url} alt="" />
      <span key={index} className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
