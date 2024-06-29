/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Home from './pages/Home.jsx'
import SavedNotes from './pages/SavedNotes.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/savedNotes' element={<SavedNotes />} />
        </Route>
      </Route>
    )
  )

  return (
   <RouterProvider router={router} />
  )
}

export default App
