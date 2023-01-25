import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useGetProductsQuery } from '../../features/dataApi';
import Error from '../../Components/Error/Error';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { searchSelector } from '../../features/search/searchSelector';
import Loading from '../../Components/Loading/Loading';

const Home = () => {
    const {data,error,isLoading} = useGetProductsQuery();
    const searchField = useSelector(searchSelector);
    
  
    if(error) return <Error/>
   if(isLoading) return <Loading/>
  return (
    <div className=''>
        <div className = 'relative ' >
            <Banner/>
            <div  className = 'absolute h-[250px] w-full  top-52 z-10 bg-gradient-to-t from-gray-100 to-transparent' / >
            
            <div className='absolute top-52 z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense m-2 bg-gradient-to-t from-gray-100 to-transparent'>
                {data && data.filter(p=> p.title.toLowerCase().includes(searchField)).map(product=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
                
            
        </div>
        
    </div>
  )
}

export default Home