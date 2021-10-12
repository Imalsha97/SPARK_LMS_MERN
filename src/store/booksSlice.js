import { createSlice } from '@reduxjs/toolkit';


export const bookSlice = createSlice({
    name: 'books',
    initialState: {
      value: null,
    },
    reducers: {
      setBooks: (state, action) => {
          state.value = action.payload;

      },
      updateBook: (state, action) => {
        const updatedBooks = [...state.value];
        const id = action.payload.id;
        const index = updatedBooks.findIndex(
          (element) => element.id === id
        );
        updatedBooks.splice(index , 1 , action.payload);
        state.value = action.payload;
      },
    },
  });

  // Action creators are generated for each case reducer function
export const { setBooks, updateBook } = bookSlice.actions;

export default bookSlice.reducer;