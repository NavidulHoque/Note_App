/* eslint-disable react/prop-types */
import { useState } from "react"
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/notesSlice"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const theme = useSelector(state => state.notes.theme)
    const dispatch = useDispatch()

    return (
        <nav className="bg-white dark:bg-[rgb(50,50,50)] dark:text-white py-[10px] sticky">

            <div className="w-[90vw] h-full mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-x-5">

                <div className="flex w-full justify-between items-center py-[7px]">

                    <div className="flex gap-x-3">

                        <button onClick={() => setIsOpen(!isOpen)} className="border-2 border-black p-2 rounded text-2xl text-black dark:text-white dark:border-white sm:hidden"><i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i></button>

                        <img className="h-[50px] w-[50px]" src={logo} alt="logo" />

                    </div>

                    <button onClick={() => theme === 'dark' ? dispatch(toggleTheme('light')) : dispatch(toggleTheme('dark'))} className="text-[24px] sm:hidden">

                        {theme === 'dark' ? <i className="fa-regular fa-sun text-white p-[12px] rounded-full hover:bg-[rgba(0,0,0,0.1)]"></i> : <i className="fa-regular fa-moon p-[12px] rounded-full hover:bg-[rgba(0,0,0,0.1)] w-[48px]"></i>}

                    </button>

                </div>

                <ul className={`w-full sm:h-[72px] text-[20px] flex flex-col sm:flex-row sm:justify-end sm:items-center sm:gap-x-9 gap-y-3 overflow-hidden ${isOpen ? 'h-[72px]' : 'h-0'} transition-all duration-300`}>
                    <li>
                        <Link className="hover:font-semibold" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:font-semibold" to="/savedNotes">Saved Notes</Link>
                    </li>
                </ul>

                <button onClick={() => theme === 'dark' ? dispatch(toggleTheme('light')) : dispatch(toggleTheme('dark'))} className="text-[24px] hidden sm:inline-block">

                    {theme === 'dark' ? <i className="fa-regular fa-sun text-white p-[12px] rounded-full hover:bg-[rgba(0,0,0,0.1)]"></i> : <i className="fa-regular fa-moon p-[12px] rounded-full hover:bg-[rgba(0,0,0,0.1)] w-[48px]"></i>}

                </button>

            </div>

        </nav>
    )
}

export default Navbar
