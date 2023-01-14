

export const quantitySelector =state=>state.bucket.cart.reduce((acc,cur)=>{
    acc += cur.quantity;
    return acc;
},0)

export const cartItems = state => state.bucket.cart

export const totalAmount =state =>state.bucket.cart.reduce((acc,cur)=>{
    acc += cur.price*cur.quantity;
    return acc;
},0)