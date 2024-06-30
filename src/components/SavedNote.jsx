/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { toggleDeleteConfirmationMessage, updateNote } from "../features/notesSlice"
import { useRef, useState } from "react"
import { convertAMPM } from "./ConvertAMPM"

const SavedNote = ({ note }) => {
  const dispatch = useDispatch()
  const [update, setUpdate] = useState(true)
  const [title, setTitle] = useState(note.title)
  const [description, setDescription] = useState(note.description)
  const inputRef = useRef(null)

  function handleDelete() {
    dispatch(toggleDeleteConfirmationMessage(note.id))
  }

  function handleUpdate() {
    if (update) {
      setUpdate(false)
      inputRef.current.focus()
    }
    else{
      setUpdate(true)
      dispatch(updateNote({
        id: note.id,
        title,
        description,
        savedDate: convertAMPM()
      }))
    }
  }

  return (
    <div className="min-w-[300px] bg-white dark:bg-[rgb(50,50,50)] dark:text-white shadow-md rounded-md p-[10px] flex flex-col gap-y-3 items-center">

      <input ref={inputRef} className="text-[33px] outline-none text-center w-full dark:bg-[rgb(50,50,50)]" onChange={(e) => setTitle(e.target.value)} value={title} readOnly={update} />

      <textarea className="text-[22px] resize-none w-full outline-none text-center dark:bg-[rgb(50,50,50)]" onChange={(e) => setDescription(e.target.value)} value={description} readOnly={update} maxLength={200} rows={4} />

      <span className="text-[22px] text-center">Last Saved: {note.savedDate}</span>

      <div className="flex gap-x-3 text-white w-full">

        <button onClick={handleUpdate} className="w-[50%] bg-[#9b59b6] hover:bg-[#8e44ad] rounded-md py-[7px] text-[20px]">{update ? "Update" : "Save"}</button>

        <button onClick={handleDelete} className="w-[50%] bg-red-500 hover:bg-red-600 rounded-md py-[7px] text-[20px]">Delete</button>

      </div>

    </div>
  )
}

export default SavedNote
