import { BrowserRouter } from "react-router-dom"
import AppRoute from "./AllRoutes/AppRoute"
import ScrollTop from "./common/ScrollTop"

function App() {


  return (
   <div>
    <BrowserRouter>
    <ScrollTop/>
    <AppRoute/>
    </BrowserRouter>
   </div>
  )
}

export default App
