import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/bucketSlice/bucketSlice';

const ProductCard = ({product}) => {
    const {id,title,description,category,image,price,rating} =product;
    const dispatch = useDispatch();
    
    const ratingStar = Math.floor(rating.rate)
    const handleClick=(e)=>{
        console.log(e)
        dispatch(addToCart(e))
    }    
  return (
    <div className='bg-white p-2 m-2  rounded-lg'>
        <div className='relative flex justify-center h-80'>
            <p className='z-10 text-gray-500 text-sm absolute top-0 right-0'>{category}</p>
            <img className='object-fill' height={300} width={200} loading='lazy' src={image} />
            
        </div>
        <div>
            <p className='truncate'>{title}</p>
        </div>
        <div className='flex'>
            {rating && Array(ratingStar).fill().map((_,idx)=>(
                <AiFillStar key={idx} className='text-yellow-400'/>
            ))}
        </div>
        <div>
            <p>${price}</p>
        </div>
        <div className='line-clamp-2'>
            {description}
        </div>
        <button onClick={()=>handleClick(product)} className='flex justify-center rounded-lg w-full bg-gradient-to-t from-yellow-600 to-yellow-500 focus:ring-2 '>
            Add to Bucket
        </button>
    </div>
  )
}

export default ProductCard