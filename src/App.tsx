import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import './firebase'
import { Home, Seasons } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/seasons" element={<Seasons />} />
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
