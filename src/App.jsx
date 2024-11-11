import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Root } from "./routes/Root/Root"

let rooooter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,   
  }
])

function App () {
  return <RouterProvider router={rooooter} />
}

export default App