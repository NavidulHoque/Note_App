/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Notes from './components/Notes.jsx'


function App() { 
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("Notes")) || [])  //note items
  const [texts, settexts] = useState(JSON.parse(localStorage.getItem("texts")) || [])  //note texts

  //init call
  useEffect(() => {
    
    if (items.length === 0) {
      addnotes()
    }
    
  }, [])
  

  //changing the value of the textarea while user writing something
  function changeText(e, index) {
    const copy = [...texts]
    copy[index] = e.target.value
    settexts(copy)
    localStorage.setItem("texts", JSON.stringify(copy))
  }

  //here the notes will be added after invoking it
  function addnotes() {

    const copyitems = [...items]
    copyitems.push('<Notes />')
    setItems(copyitems)

    const copytexts = [...texts]
    copytexts.push('')
    settexts(copytexts)

    localStorage.setItem("Notes", JSON.stringify(copyitems))
    localStorage.setItem("texts", JSON.stringify(copytexts))

  }

  //notes will be deleted after invoking it
  function del(index) {
    const updatedItems = items.slice(0, index).concat(items.slice(index + 1))
    setItems(updatedItems)

    const updatedTexts = texts.slice(0, index).concat(texts.slice(index + 1))
    settexts(updatedTexts)

    localStorage.setItem("Notes", JSON.stringify(updatedItems))
    localStorage.setItem("texts", JSON.stringify(updatedTexts))
  }

  return (
    <div className='relative min-h-screen bg-[#3498db]'>
      <button onClick={addnotes} className='absolute top-5 right-5 cursor-pointer bg-black text-white py-[7px] px-[10px] rounded-md'><i className="fa-solid fa-plus"></i>Add Note</button>

      <div className='flex flex-wrap justify-center gap-4 pt-[90px] w-[90vw] mx-auto'>

        {items.map((item, index) => (
          <Notes key={index} index={index} texts={texts} onchange={changeText} del={del}/>
        ))}

      </div>
      
    </div>
  )
}

export default App
