import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home";
import {Category} from "../pages/Category";
import {ItemDetailContainer} from "../pages/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";

const MainRouter = () =>{
    return(
        <BrowserRouter>
        <><NavBar></NavBar></>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/category/:id" element={<Category/>} ></Route>
            <Route path="/item/:id" element={<ItemDetailContainer/>} ></Route>
        </Routes>
        </BrowserRouter>
    )
};

export default MainRouter;