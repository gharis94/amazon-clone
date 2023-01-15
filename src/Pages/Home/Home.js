import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useGetProductsQuery } from '../../features/dataApi';
import Error from '../../Components/Error/Error';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Home = () => {
    const {data,error,isLoading} = useGetProductsQuery();
  //  console.log(data)
   // if(error) return <Error/>
  return (
    <div className='bg-gray-100 '>
        <div className = 'relative ' >
            <Banner/>
            <div  className = 'absolute h-[250px] w-full  bottom-0 bg-gradient-to-t from-gray-100 to-transparent' / >

            <div className='absolute top-52 z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense m-2 bg-gradient-to-t from-gray-100 to-transparent'>
                {data && data.map(product=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Home