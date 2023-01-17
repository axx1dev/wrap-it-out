import { createSlice } from "@reduxjs/toolkit";

const initilState = {
    data : [
        {
            id: 0,
            name: 'nati',
            age: 29
        },
        {
            id: 1,
            name: 'morrito',
            age: 21
        }
    ]
}

//this is reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState: initilState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload)
    },
    deleteUser: (state, action) => {
      const userFind = state.data.find((user) => user.id === action.payload)
      if (userFind) {
        state.data.splice(state.data.indexOf(userFind), 1)
      }
    },
    update: (state, action) => {
      const {id, name, age} = action.payload
      const foundUser = state.data.find((user) => user.id === id)
      console.log({foundUser})
      console.log(action.payload)
      if (foundUser) {
        foundUser.name = name
        foundUser.age = age
      }
    },
  },
});

export const { addUser, deleteUser, update } = counterSlice.actions;
export default counterSlice.reducer;
