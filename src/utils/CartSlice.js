import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{ 
        addItem: (state,action) => {
            const existing = state.items.find((i) => i.id === action.payload.id)
            if(existing){
                existing.qty += 1
            }
            else{
                state.items.push({...action.payload,qty:1})
            }
        },
        removeItem: (state,action) => {
            const index = state.items.findIndex((i) => i.id !== action.id)
            if(index !== -1){
                if(state.items[index].qty >1){
                    state.items[index].qty -= 1
                }
                else{
                    state.items.splice(index,1)
                }
            }
        },
        clearCart: (state) => {state.items = []}
    }
})
export const {addItem, removeItem, clearCart } = CartSlice.actions
export default CartSlice.reducer