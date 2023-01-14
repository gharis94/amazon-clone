import React from 'react';
import { useDispatch } from 'react-redux';
import {removeFromCart,addToCart} from '../../features/bucketSlice/bucketSlice';  
import {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'

const CheckOutCard = ({product}) => {
    const {id,title,description,category,image,price,rating,quantity} =product;
    const dispatch=useDispatch()
    console.log(product)
    return (
    <div className='p-2 grid grid-cols-5 border-b-2'>
        <div className='col-span-1'>
            <img src={image}/>
        </div>
        <div className='col-span-2 pl-2'>
            <p className='text-lg'>{title}</p>
            <p className='line-clamp-2 text-sm'>{description}</p>
        </div>
        <div className='col-span-1 flex justify-center items-center'>
            <button onClick={()=>dispatch(removeFromCart(product))}><AiFillCaretLeft/></button>
            <p className='font-bold'>{quantity}</p>
            <button onClick={()=>dispatch(addToCart(product))}><AiFillCaretRight/></button>
        </div>
        <div className='col-span-1 flex pr-1 justify-end items-center'>
            <p className='font-bold'>${quantity*price}</p>
        </div>
    </div>
  )
}

export default CheckOutCard