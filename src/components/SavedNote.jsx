/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux"
import { toggleDeleteConfirmationMessage, updateNote } from "../features/notesSlice"
import { useEffect, useRef, useState } from "react"
import { formatDistance } from 'date-fns'
import { Bounce, toast } from 'react-toastify';

const SavedNote = ({ note }) => {

  const dispatch = useDispatch()
  const [update, setUpdate] = useState(true)
  const [cancel, setCancel] = useState(false)
  const [title, setTitle] = useState(note.title)
  const [description, setDescription] = useState(note.description)
  const inputRef = useRef(null)
  const theme = useSelector(state => state.notes.theme)

  useEffect(() => {

    if (cancel) {
      setTitle(note.title)
      setDescription(note.description)
      setCancel(false)
    }

  }, [cancel])


  function handleDelete() {
    dispatch(toggleDeleteConfirmationMessage(note.id))
  }

  function handleUpdate() {

    if (update) {
      setUpdate(false)
      inputRef.current.focus()
    }
    else {

      if (title && description) {
        toast.success('Note Updated', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme,
          transition: Bounce,
        });

        setUpdate(true)
        dispatch(updateNote({
          id: note.id,
          title,
          description,
          savedDate: new Date().toString()
        }))
      }
      else {
        toast.error("Please fill up the Note", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme,
          transition: Bounce,
        });
      }
    }
  }

  function handleCancel() {
    setCancel(true)
    setUpdate(true)
  }

  return (
    <div className="min-w-[300px] bg-white border-[1px] border-black dark:border-white dark:bg-[rgb(50,50,50)] dark:text-white shadow-md rounded-md p-[10px] flex flex-col gap-y-2">

      <input ref={inputRef} className="p-[5px] text-[24px] outline-none w-full dark:bg-[rgb(50,50,50)] font-semibold" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} readOnly={update} />

      <textarea className="p-[5px] text-[18px] resize-none w-full outline-none dark:bg-[rgb(50,50,50)]" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} readOnly={update} maxLength={200} rows={4} />

      <span className="text-[18px] text-slate-500 dark:text-slate-300">{formatDistance(note.savedDate, new Date(), { addSuffix: true })}</span>

      <div className="flex gap-x-3 text-white w-full justify-end">

        {!update && <button onClick={handleCancel} className="w-[75px] bg-[#9b59b6] hover:bg-[#8e44ad] rounded-md py-[7px] text-[18px]">Cancel</button>}        

        <button onClick={handleUpdate} className="w-[75px] bg-[#9b59b6] hover:bg-[#8e44ad] rounded-md py-[7px] text-[18px]">{update ? "Update" : "Save"}</button>

        <button onClick={handleDelete} className="w-[75px] bg-red-500 hover:bg-red-600 rounded-md py-[7px] text-[18px]">Delete</button>

      </div>

    </div>
  )
}

export default SavedNote
