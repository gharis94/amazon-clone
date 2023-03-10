import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import CheckOutCard from '../../Components/CheckoutCard/CheckOutCard';
import Modal from '../../Components/Modal/Modal';
import { cartItems,totalAmount } from '../../features/bucketSlice/bucketSelector';

const CheckOutPage = () => {
    const items = useSelector(cartItems);
    const total =useSelector(totalAmount)
    const [state,setState] = useState('cash')
    const [isOpen,setIsOpen] =useState(false);

    const handleChange=(e)=>{
        const {value}=e.target;
       
        setState(value)
    }
    return (
    <div className='sm:grid sm:grid-cols-4  bg-gray-100 '>
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
        <div className='col-span-1 border-b-4 p-4 bg-white m-5 sm:mt-5 sm:m-0 rounded-lg '>
            {items.length>0?(
                <div className='flex flex-col '>
                    <div className='flex justify-between'>
                        <p>Total Amount</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <div className='mx-6'>
                        <button onClick={()=>setIsOpen(true)} className='flex justify-center rounded-lg w-full bg-gradient-to-t from-yellow-600 to-yellow-500 focus:ring-2>Pay Now</button' >
                        Pay Now
                        </button>
                    </div>
                    {state && (<div className='my-6 flex justify-around py-10 border-y-2'>
                            <label>
                                <input type='radio' checked name='payment' onChange={(e)=>handleChange(e)} value='cash'/>Cash
                            </label>
                            <label>
                                <input type='radio' name='payment' onChange={(e)=>handleChange(e)}  value='card'/>Card
                            </label>
                        </div>)
                    
                    }
                    
                </div>    
                
                
            ):(<p className='text-center'>Bucket is empty</p>)}
        </div>
        <Modal  open={isOpen} set={setIsOpen}/>
    </div>
  )
}

export default CheckOutPage