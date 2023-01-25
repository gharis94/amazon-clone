import React,{useState,useEffect} from 'react'
import {ReactComponent as Logo} from '../../assets/amazon.svg';
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import { useGetCategoryQuery } from '../../features/dataApi'
import { useSelector,useDispatch } from 'react-redux';
import { quantitySelector } from '../../features/bucketSlice/bucketSelector';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../../features/user/userSelector';
import { useDebounce } from '../../hooks/useDebounce/useDebounce';
import { setToSearch } from '../../features/search/searchSlice';

const Header = () => {
    const {data} = useGetCategoryQuery();
    const cartCount =useSelector(quantitySelector);
    const navigateTo=useNavigate();
    const user = useSelector(userSelector);
    const [inputSearch,setInputSearch] = useState('');
    const debounceValue = useDebounce(inputSearch,500);
    const dispatch = useDispatch();
    const handleNavigate=(e)=>{        
        navigateTo(`/category/${e}`)
    }
    useEffect(()=>{
        console.log(debounceValue)
        dispatch(setToSearch(debounceValue))
    },[debounceValue])
  return (
    <div className='w-full  '>
        {/* Header Top */}
        <div className='h-12 flex justify-between sm:flex-grow  bg-amazonblue-dark space-x-2 p-2 py-4 items-center'>
        {/* {Left side of Header} */}
            <div>
                <div onClick={()=>navigateTo('/')} className='cursor-pointer'>
                    <Logo className='h-10 w-10 '/>
                </div>
            </div>
            {/* Header Center */}
            <div className='bg-yellow-400 my-2 sm:flex sm:flex-grow hidden items-center rounded-lg'>
                <input value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} className='flex-grow focus:outline-none focus:border-none px-2 rounded-l-lg' placeholder='Search..'/>
                <FiSearch className='text-white ml-1 cursor-pointer'/>
            </div>
            {/* Header right */}
            <div className='text-white flex py-2'>
                <div className='flex flex-col items-center'>
                    <p> Hello, {
                            user ? <span span className = 'text-white' >{user.displayName}</span> : <span className = 'text-white hover:text-yellow-400 decoration-1  cursor-pointer'  onClick={()=>navigateTo('/signin')}> Sign in ? </span>}
                    </p>
                    {user? <p className = 'text-white hover:text-yellow-400 decoration-1  cursor-pointer'>Sign Out</p>:null}
                </div>
                <div onClick={()=>navigateTo('/checkout')} className='relative flex items-center space-x-1 cursor-pointer'>
                    <p className='bg-yellow-400 absolute right-0 top-0 px-1 rounded-full text-black'>{cartCount}</p>
                    <AiOutlineShoppingCart className='text-white h-10 w-10'/>
                </div>
                <div onClick={()=>navigateTo('/order')} className='hidden pl-1 sm:flex flex-col items-center hover:text-yellow-400 cursor-pointer'>
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>
            </div>
        </div>
        {/* Header Bottom */}
        <div className='h-6 flex bg-amazonblue-light items-center p-1 text-white space-x-2'>
            <AiOutlineMenu/>
            <div className='hidden sm:flex'>
                {
                data && data.map(category=>(
                    <p onClick={()=>handleNavigate(category)} className='text-sm cursor-pointer' key={category}>{category.toUpperCase()}</p>
                ))
            }
            </div>
            
            
        </div>
    </div>
    
  )
}

export default Header