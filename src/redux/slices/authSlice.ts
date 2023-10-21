import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type typeInitialState = {
  email:  string
  token:  string,
  id: string ,
}

const initialState = {
  email: "",
  token: "" ,
  id: "",
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
      state.email = ""
      state.token = ""
      state.id = ""
    }

  }
})


export const { addUser, removeUser } = authSlice.actions

export default authSlice.reducer