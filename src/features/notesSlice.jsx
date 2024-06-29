import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: JSON.parse(localStorage.getItem("notes")) || [],
        DeleteConfirmationMessageState: JSON.parse(localStorage.getItem("messageState")) || false,
        userID: ""
    },
    reducers: {
        addNote: (state, action) => {

            state.notes = [...state.notes, action.payload]
            localStorage.setItem("notes", JSON.stringify(state.notes))

        },
        deleteNote: (state) => {

            state.notes = state.notes.filter(note => note.id != state.userID)
            localStorage.setItem("notes", JSON.stringify(state.notes))

        },
        updateNote: (state, action) => {

            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
                state.notes[index] = action.payload;
            }

            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        toggleDeleteConfirmationMessage: (state, action) => {

            state.DeleteConfirmationMessageState = !state.DeleteConfirmationMessageState

            state.userID = action.payload

            localStorage.setItem("messageState", JSON.stringify(state.DeleteConfirmationMessageState))
        }
    }
})

export const { addNote, deleteNote, updateNote, toggleDeleteConfirmationMessage } = notesSlice.actions
export default notesSlice.reducer

