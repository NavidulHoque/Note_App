import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import DeleteConfirmationMessage from "./components/DeleteConfirmationMessage"
import { useSelector } from "react-redux"
import { useState } from "react"

const RootLayout = () => {
  const DeleteConfirmationMessageState = useSelector((state) => state.notes.DeleteConfirmationMessageState)
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light")

  return (
    <div className={theme}>

      <div className='flex flex-col min-h-screen relative'>

        {DeleteConfirmationMessageState && <DeleteConfirmationMessage DeleteConfirmationMessageState={DeleteConfirmationMessageState} />}

        <Navbar theme={theme} setTheme={setTheme} />
        <Outlet />

      </div>

    </div>
  )
}

export default RootLayout
