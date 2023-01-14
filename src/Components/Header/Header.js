import React from 'react'
import {ReactComponent as Logo} from '../../assets/amazon.svg'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import { useGetCategoryQuery } from '../../features/dataApi'
import { useSelector } from 'react-redux'
import { quantitySelector } from '../../features/bucketSlice/bucketSelector'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {data} = useGetCategoryQuery();
    const cartCount =useSelector(quantitySelector);
    const navigateTo=useNavigate();
    //console.log(data)
    const handleNavigate=(e)=>{
        //const url = e.replace(' ','-')
        navigateTo(`/category/${e}`)
    }
  return (
    <div className='w-full '>
        {/* Header Top */}
        <div className='h-10 flex sm:flex-grow bg-amazonblue-dark space-x-2 px-2 items-center'>
        {/* {Left side of Header} */}
            <div>
                <div onClick={()=>navigateTo('/')} className='cursor-pointer'>
                    <Logo className='h-10 w-10 '/>
                </div>
            </div>
            {/* Header Center */}
            <div className='bg-yellow-400 my-2 flex flex-grow items-center rounded-lg'>
                <input className='flex-grow focus:outline-none focus:border-none px-2 rounded-l-lg' placeholder='Search..'/>
                <FiSearch className='text-white'/>
            </div>
            {/* Header right */}
            <div className='text-white flex py-2'>
                <div>
                    <p>{`Hello`}</p>
                    <p>Account & Lists</p>
                </div>
                <div onClick={()=>navigateTo('/checkout')} className='relative flex items-center space-x-1 cursor-pointer'>
                    <p className='bg-yellow-400 absolute right-0 top-0 px-1 rounded-full text-black'>{cartCount}</p>
                    <AiOutlineShoppingCart className='text-white h-10 w-10'/>
                </div>
                <div className='hidden sm:flex flex-col items-center'>
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>
            </div>
        </div>
        {/* Header Bottom */}
        <div className='h-6 flex bg-amazonblue-light items-center p-1 text-white space-x-2'>
            <AiOutlineMenu/>
            {
                data && data.map(category=>(
                    <p onClick={()=>handleNavigate(category)} className='text-sm cursor-pointer' key={category}>{category.toUpperCase()}</p>
                ))
            }
            
        </div>
    </div>
    
  )
}

export default Header