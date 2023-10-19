import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type typeInitialState = {
  email: null,
  token: null,
  id: null ,
}

const initialState = {
  email: null,
  token: null,
  id: null,
}

const  authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    addUser(state, action: PayloadAction<typeInitialState>){
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },

    removeUser(state){
      state.email = null
      state.token = null
      state.id = null
    }

  }
})


export const { addUser, removeUser } = authSlice.actions

export default authSlice.reducer