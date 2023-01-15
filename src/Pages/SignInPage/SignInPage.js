import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { signInWithGoogle } from '../../utils/firebase';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../features/user/userSlice';
import { userSelector } from '../../features/user/userSelector';


const SignInPage = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const u = useSelector(userSelector);
    
    if(u){
        navigateTo('/')
    }

    const handleClick =async()=>{
        const {user}=await signInWithGoogle()
        
        const updatedUser={
            uid:user.uid,
            email:user.email,
            displayName:user.displayName,
            profileImage:user.photoURL,
            phone:user.phoneNumber
        };

        dispatch(setUser(updatedUser));
        navigateTo('/checkout');
    }
    
  return (
    <div className='flex justify-center bg-gray-100 items-center h-96'>
        <div className='w-4/12 bg-white h-6/12 drop-shadow-xl flex justify-center flex-col items-center py-10 rounded-lg'>
            
                <FcGoogle className='w-[100px] h-[100px] mb-6'/>
                <button className='bg-blue-500 text-white px-10 rounded-lg hover:bg-blue-600' onClick={()=>handleClick()}>Sign In </button>
            
        </div>
    </div>
  )
}

export default SignInPage