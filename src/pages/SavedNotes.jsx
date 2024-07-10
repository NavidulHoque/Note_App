/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import SavedNote from "../components/SavedNote"
import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';

const SavedNotes = () => {
  const notes = useSelector((state) => state.notes.notes)
  const [showHowMany, setShowHowMany] = useState(6)
  const windowInnerWidth = window.innerWidth

  function handleShowMore() {
    if (windowInnerWidth >= 1024) {
      setShowHowMany(prev => prev + 3)
    }
    else if (windowInnerWidth < 1024 && windowInnerWidth >= 768) {
      setShowHowMany(prev => prev + 2)
    }
    else{
      setShowHowMany(prev => (prev + 3) > notes.length ? notes.length : prev + 3)
    }
  }

  function handleShowLess() {
    if (windowInnerWidth >= 1024) {
      setShowHowMany(prev => prev - 3)
    }
    else if (windowInnerWidth < 1024 && windowInnerWidth >= 768) {
      setShowHowMany(prev => prev - 2)
    }
    else{
      setShowHowMany(prev => (prev - 3) > 6 ? (prev - 3) : 6)
    }
  }

  return (
    <>
      <Helmet>
        <title>Saved Notes</title>
      </Helmet>
      <ToastContainer />
      <div className='bg-slate-100 dark:bg-black basis-[645px] pt-[20px] flex flex-col gap-y-8 pb-[20px]'>

        <div className="w-[90vw] mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

          {notes.slice(0, showHowMany).map((note) => (
            <SavedNote key={note.id} note={note} />
          ))}

        </div>

        <div className="flex justify-center gap-x-3">

          {showHowMany > 6 && <button onClick={handleShowLess} className="bg-[#273c75] hover:bg-[#192a56] text-white py-[6px] px-[10px] rounded-md">Show Less</button>}

          {notes.length > showHowMany && <button onClick={handleShowMore} className="bg-[#273c75] hover:bg-[#192a56] text-white py-[6px] px-[10px] rounded-md">Show More</button>}

        </div>

      </div>
    </>
  )
}

export default SavedNotes
