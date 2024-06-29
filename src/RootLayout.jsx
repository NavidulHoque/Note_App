import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import DeleteConfirmationMessage from "./components/DeleteConfirmationMessage"
import { useSelector } from "react-redux"

const RootLayout = () => {
  const DeleteConfirmationMessageState = useSelector((state) => state.notes.DeleteConfirmationMessageState)

  return (
    <div className='flex flex-col min-h-screen relative'>

      {DeleteConfirmationMessageState && <DeleteConfirmationMessage DeleteConfirmationMessageState={DeleteConfirmationMessageState} />}

      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootLayout
