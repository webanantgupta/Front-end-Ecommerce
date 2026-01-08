import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ViewDetailes from "../pages/ViewDetailes";
import Cart from "../pages/Cart";
import Error from "../pages/Error";
import Header from "../common/Header";
import Footer from "../common/Footer"
import ScrollTop from "../common/ScrollTop";

const AppRoute = () =>{
    return <div>
<Header/>
<Routes>
    
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/view"} element={<ViewDetailes/>}/>
    <Route path={"/cart"} element={<Cart/>}/>
    <Route path={"*"} element={<Error/>}/>
</Routes>
<Footer/>
    </div>
}

export default AppRoute;