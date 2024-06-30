/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { deleteNote, toggleDeleteConfirmationMessage } from "../features/notesSlice"

const DeleteConfirmationMessage = ({DeleteConfirmationMessageState}) => {

  const dispatch = useDispatch()
    
  return (
    <div className={`fixed w-full top-0 left-0 h-[735px] justify-center items-center bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(0,0,0,0.9)] ${DeleteConfirmationMessageState ? 'flex z-10' : "hidden -z-10"}`}>
      
      <div className='basis-[300px] bg-white dark:bg-[rgb(50,50,50)] shadow-md flex flex-col items-center gap-y-3 relative px-[15px] py-[24px] min-w-[300px]'>

        <i onClick={() => dispatch(toggleDeleteConfirmationMessage())} className="fa-solid fa-xmark absolute right-[10px] top-[10px] text-[rgba(0,0,0,0.4)] cursor-pointer"></i>

        <span className="text-red-500 border-[3px] border-red-500 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[30px]"><i className="fa-solid fa-xmark"></i></span>

        <h3 className="text-[20px] dark:text-white">Are You Sure?</h3>

        <p className="text-[15px] text-slate-400 text-center dark:text-white">Do you really want to delete these records? This process cannot be undone</p>

        <div className="w-full flex gap-x-2">

          <button onClick={() => dispatch(toggleDeleteConfirmationMessage())} className="w-[50%] text-[20px] py-[5px] bg-[#2ecc71] hover:bg-[#27ae60] text-white">No</button>

          <button onClick={() => {
            dispatch(deleteNote())
            dispatch(toggleDeleteConfirmationMessage())
          }} className="w-[50%] text-[20px] py-[5px] bg-red-500 hover:bg-red-600 text-white">Yes</button>

        </div>

      </div>
    </div>
  )
}

export default DeleteConfirmationMessage
