import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import TeamNew from "./pages/Team/TeamNew";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Events from "./pages/Events/Events";
import Footer from "./Components/Footer/Footer";

const Layout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

const App = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<TeamNew />} />
        </Route>
    </Routes>
);

export default App;
