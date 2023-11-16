import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ulid } from 'ulid';
import * as userInitialData from './userInitialData.json'


interface User {
  username?: string;
  email?: string;
  phone?: string;
  id?: string;
  creationDate?: string;
}

interface UserState {
  users: User[];
}
const initialState: UserState = userInitialData;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
        const date= new Date();
        const creationDate= date.toLocaleString();
        let newUser=action.payload;
        newUser["creationDate"]=creationDate ;
        newUser["id"]=ulid();
        state.users.push(action.payload);
    },
  },
});

export const { setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;
