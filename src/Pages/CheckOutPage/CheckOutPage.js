import React from 'react'
import { useSelector } from 'react-redux';
import CheckOutCard from '../../Components/CheckoutCard/CheckOutCard';
import { cartItems,totalAmount } from '../../features/bucketSlice/bucketSelector';

const CheckOutPage = () => {
    const items = useSelector(cartItems);
    const total =useSelector(totalAmount)
    console.log(items)
    return (
    <div className='sm:grid sm:grid-cols-4  bg-gray-100'>
        <div className='col-span-3  bg-white m-5 rounded-lg border-b-2'>
            {
                items.length>0? (
                    <div>
                        {items.map(product=><CheckOutCard key={product.id} product={product}/>)}
                    </div>
                ):(
                    <div className='flex justify-center items-center'>
                        <p className='text-2xl font-bold'>Bucket is Empty</p>
                    </div>
                )
            }
        </div>
        <div className='col-span-1 bg-blue-400 m-5 sm:mt-5 sm:m-0 rounded-lg '>
            {items.length>0?(
                <div>
                    <p>Total Amount</p>
                    <p>{total}</p>
                </div>
            ):(<p className='text-center'>Bucket is empty</p>)}
        </div>
    </div>
  )
}

export default CheckOutPage