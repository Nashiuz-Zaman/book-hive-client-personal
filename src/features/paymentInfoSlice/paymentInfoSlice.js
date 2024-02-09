import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      formData:{},
}

const paymentInfoSlice= createSlice({
      name:"paymentInfo",
      initialState,
      reducers:{
            setFormData(state, action){
                  state.formData = { ...state.formData, ...action.payload };
            }
      }
})

export const {setFormData}=paymentInfoSlice.actions;
export default paymentInfoSlice.reducer