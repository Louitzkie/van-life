import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </>
    );
};

export default App;
