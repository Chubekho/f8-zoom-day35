import { HashRouter as Router, Routes, Route} from "react-router";

//Pages
import Home from "../../pages/Home"
import Counter from "../../pages/Counter"
import Todo from "../../pages/Todo"
import Profile from "../../pages/Profile"
import Products from "../../pages/Products"
import Comments from "../../pages/Comments"
import Weather from "../../pages/Weather"
import Buttons from "../../pages/Buttons"

//
import Navigation from "../Navigation";

function AppRoutes() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Counter" element={<Counter/>}/>
                <Route path="/Todo" element={<Todo/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Comments" element={<Comments/>}/>
                <Route path="/Weather" element={<Weather/>}/>
                <Route path="/Buttons" element={<Buttons/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;