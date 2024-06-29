import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addNote } from "../features/notesSlice"
import { convertAMPM } from "../components/ConvertAMPM"

const Home = () => {
    const [title, setTitle] = useState(JSON.parse(localStorage.getItem("title")) || "")
    const [description, setDescription] = useState(JSON.parse(localStorage.getItem("description")) || "")
    const dispatch = useDispatch()
    const spanRef = useRef(null)

    function handleSave() {
        if (title && description) {
            dispatch(addNote({
                id: Date.now().toString(32),
                title,
                description,
                savedDate: convertAMPM()
            }))

            spanRef.current.style.opacity = "1"

            setTimeout(() => {
                spanRef.current.style.opacity = "0"
            }, 3000);

            setTitle("")
            setDescription("")
            localStorage.setItem("title", JSON.stringify(""))
            localStorage.setItem("description", JSON.stringify(""))

        }

    }

    return (
        <div className="bg-slate-100 flex justify-center items-center basis-[645px]">

            <div className="flex flex-col items-start gap-y-2 rounded-md p-[10px] text-[24px] w-[80vw] sm:basis-[600px] bg-white shadow-md">

                <h1 className="text-center text-[30px] w-full">Add Your Notes</h1>

                <input className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none" type="text" placeholder="Title" autoFocus onChange={(e) => {

                    setTitle(e.target.value)
                    localStorage.setItem("title", JSON.stringify(e.target.value))

                }} value={title} />

                <textarea className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none resize-none" placeholder="Description" maxLength={200} rows={4} onChange={(e) => {

                    setDescription(e.target.value)
                    localStorage.setItem("description", JSON.stringify(e.target.value))

                }} value={description} />

                <div className="flex gap-x-3">

                    <button onClick={handleSave} className="bg-[#3498db] text-white hover:bg-[#2980b9] rounded-md px-[10px]">Save Note</button>

                    <span ref={spanRef} style={{ opacity: "0" }} className="transition-all duration-300 bg-[#3498db] text-white rounded-md px-[10px]">Saved</span>

                </div>
                
            </div>

        </div>
    )
}

export default Home
