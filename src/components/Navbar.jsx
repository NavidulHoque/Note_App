import { useState } from "react"
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-black text-white py-[10px] sticky">

            <div className="w-[90vw] h-full mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">

                <div className="flex w-full justify-between items-center py-[7px]">

                    <img className="h-[50px] w-[50px]" src={logo} alt="logo" />

                    <button onClick={() => setIsOpen(!isOpen)} className="border-2 border-white p-2 rounded text-2xl sm:hidden"><i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-white`}></i></button>

                </div>

                <ul className={`w-full sm:h-[72px] text-[20px] flex flex-col sm:flex-row sm:justify-end sm:items-center sm:gap-x-9 gap-y-3 overflow-hidden ${isOpen ? 'h-[72px]' : 'h-0'} transition-all duration-300 `}>
                    <li>
                        <Link className="hover:font-semibold" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:font-semibold" to="/savedNotes">Saved Notes</Link>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar
