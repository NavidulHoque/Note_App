import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import DeleteConfirmationMessage from "./components/DeleteConfirmationMessage"
import { useSelector } from "react-redux"

const RootLayout = () => {
  const DeleteConfirmationMessageState = useSelector((state) => state.notes.DeleteConfirmationMessageState)
  const theme = useSelector(state => state.notes.theme)

  return (
    <div className={theme}>

      <div className='min-h-screen relative text-lg md:text-xl lg:text-2xl'>

        {DeleteConfirmationMessageState && <DeleteConfirmationMessage DeleteConfirmationMessageState={DeleteConfirmationMessageState} />}

        <Navbar />
        <Outlet />

      </div>

    </div>
  )
}

export default RootLayout
