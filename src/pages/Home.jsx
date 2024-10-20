import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNote } from "../features/notesSlice"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [title, setTitle] = useState(JSON.parse(localStorage.getItem("title")) || "")
    const [description, setDescription] = useState(JSON.parse(localStorage.getItem("description")) || "")
    const dispatch = useDispatch()
    const theme = useSelector(state => state.notes.theme)
    const inputRef = useRef(null)

    function handleSave() {
        if (title && description) {
            dispatch(addNote({
                id: Date.now().toString(32),
                title,
                description,
                savedDate: new Date().toString()
            }))

            setTitle("")
            setDescription("")
            localStorage.setItem("title", JSON.stringify(""))
            localStorage.setItem("description", JSON.stringify(""))

            inputRef.current.focus()

            toast.success('Note Saved', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme,
                transition: Bounce,
            });
        }
        else {
            toast.error('Please fill up the Note', {
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

    function handleCancel() {

        setTitle("")
        setDescription("")
        localStorage.setItem("title", JSON.stringify(""))
        localStorage.setItem("description", JSON.stringify(""))

        inputRef.current.focus()

    }

    return (
        <>
            <Helmet>
                <title>Add Note</title>
            </Helmet>
            <ToastContainer />
            <div className="bg-slate-100 dark:bg-black basis-[645px] h-[90vh] flex justify-center items-center font-mono">

                <div className="flex flex-col items-start gap-y-2 rounded-md p-[10px] text-[24px] w-[80vw] sm:basis-[600px] bg-white dark:bg-[rgb(50,50,50)] shadow-md">

                    <h1 className="text-center text-[30px] w-full dark:text-white">Add Your Note</h1>

                    <input ref={inputRef} className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none dark:bg-[rgb(50,50,50)] dark:text-white" type="text" placeholder="Title" autoFocus onChange={(e) => {

                        setTitle(e.target.value)
                        localStorage.setItem("title", JSON.stringify(e.target.value))

                    }} value={title} />

                    <textarea className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none resize-none dark:bg-[rgb(50,50,50)] dark:text-white" placeholder="Description" maxLength={200} rows={4} onChange={(e) => {

                        setDescription(e.target.value)
                        localStorage.setItem("description", JSON.stringify(e.target.value))

                    }} value={description} />

                    <div className="flex gap-x-3">

                        <button onClick={handleSave} className="bg-[#3498db] text-white hover:bg-[#2980b9] rounded-md px-[10px]">Save</button>

                        <button onClick={handleCancel} className="bg-[#3498db] text-white hover:bg-[#2980b9] rounded-md px-[10px]">Cancel</button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home
