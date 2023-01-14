import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard';
import {useGetCategoryByNameQuery} from '../../features/dataApi'

const Category = () => {
  const {categoryId} =useParams();
  const {data} = useGetCategoryByNameQuery(categoryId)
  console.log(categoryId)  
  console.log(data)
    return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-2xl my-6'>{categoryId.toUpperCase()}</p>
        <div className='h-[2px] w-10/12 bg-gray-300  mb-6'/>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense '>
        {
            data && data.length>0?(
                data.map(product=><ProductCard key={product.id} product={product}/>)
            ):(
                <p>Sorry, No Product is available</p>
            )
        }
        </div>
        
    </div>
  )
}

export default Category