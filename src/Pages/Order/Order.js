import React from 'react'

const Order = () => {
  return (
    <div className='mt-4 ml-6 h-screen bg-gray-100'>
        <p className='text-3xl'>Your Order</p>
        <div className='border-b-2 grid grid-cols-5 mt-5 text-gray-400'>
            <p className='col-span-3 pl-4'>Description</p>
            <p className='col-span-1'>Amount</p>
            <p className='col-span-1'>Delivered</p>
        </div>
        <p className='mt-10 text-center font-semibold'>Demo Project, Full functiality avaible in complete Proect</p>
    </div>
  )
}

export default Order