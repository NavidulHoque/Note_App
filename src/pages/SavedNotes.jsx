/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import SavedNote from "../components/SavedNote"

const SavedNotes = () => {
  const notes = useSelector((state) => state.notes.notes)
  
  return (
    <div className={`bg-slate-100 basis-[645px] pt-[20px]`}>


      <div className="w-[90vw] mx-auto grid gap-5 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">

      {notes.map((note) => (
           <SavedNote key={note.id} note={note} />
        ))}

      </div>
      
    </div>
  )
}

export default SavedNotes
