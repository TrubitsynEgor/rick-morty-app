import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import './firebase'
import { Home, Page404, Season, Seasons } from './pages';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/seasons" element={<Seasons />} />
      <Route path="/seasons/:id" element={<Season />} />


      <Route path="*" element={<Page404 />} />
    </>
  )
);




function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
