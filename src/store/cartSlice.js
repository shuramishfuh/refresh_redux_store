import  {createSlice} from '@reduxjs/toolkit';

const initialState = {isShown:false}

const cartSlice =createSlice({
   name:'showCart',
   initialState,
    reducers:{
       toggle(state){
           console.log(state)
           state.isShown = !state.isShown
       }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;