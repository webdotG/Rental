import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type typeInitialState = {
  email: string,
  token: number,
  id: number,
}

const initialState: typeInitialState = {
  email: '',
  token: 0,
  id: 0,
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
      state.email = ''
      state.token = 0
      state.id = 0
    }

  }
})


export const { addUser, removeUser } = authSlice.actions

export default authSlice.reducer