import {useEffect, useState} from 'react';


export const useDebounce=(val,t=500)=>{
    const [state,setState] = useState(val)
    
    useEffect(()=>{
        const timer = setTimeout(() => {
            setState(val)
        }, t)

        return ()=>{
            clearTimeout(timer)
        }
    },[val,t])
    
    return state;
}