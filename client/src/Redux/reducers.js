import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[]
};


export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
           const exist = state.products.find((item)=>item._id===action.payload._id)
           if(exist){
           exist.quantity = exist.quantity + action.payload.quantity
           }
           else{
            state.products=[...state.products, action.payload]
           }
            
        },
        removeFromCart:(state,action)=>{
          state.products =  state.products.filter((item)=>item._id!==action.payload.id )
        },
        clearCart:(state)=>{
            state.products=[]
        }
    }
})

export const { addToCart,removeFromCart,clearCart } = cartReducer.actions
export default cartReducer.reducer

