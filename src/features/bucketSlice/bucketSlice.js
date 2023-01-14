import { createSlice,current } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

export const bucketSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const found = state.cart.find(product=>product.id===action.payload.id);
            console.log(found)
            if(!found){
                console.log('a')
                state.cart=[...state.cart,{...action.payload,quantity:1}]
            }else{
                console.log('b')
                state.cart= state.cart.map(product=>product.id ===action.payload.id?({...product,quantity:product.quantity+1}
                ):product)
            }
            console.log(state)
            
        },
        removeFromCart:(state,action)=>{
            //console.log(action.payload)
            const found = [...state.cart].find(({id})=>(id==action.payload.id && action.payload.quantity>1))
            if(found){
                state.cart=state.cart.map(product=>product.id ===action.payload.id?({...product,quantity:product.quantity-1}):(product))
            }else{
                state.cart=state.cart.filter(product=>product.id !==action.payload.id)
            }
        }
    }
})

export const {addToCart,removeFromCart} = bucketSlice.actions;

export default bucketSlice.reducer