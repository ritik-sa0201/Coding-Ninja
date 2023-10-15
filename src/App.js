import { useEffect, useState, lazy } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { motion } from "framer-motion";
// import lottyimg from "./Components/Landing/assets/land_lazy.json";
// import teamlottyimg from "./Components/Landing/assets/team_lazy.json";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TeamNew from "./Components/Team/TeamNew"
// import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
// import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Events from "./Components/Events/Events";
const LazyLanding = lazy(() => import("./Components/Landing/Landing"));

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Landing />} />
          <Route path='/events' element={<Events />} />
          <Route path='/team' element={<TeamNew />} />
        </Route>
      </Routes>
  );

  // return (
  //   <div className="App">
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       whileInView={{ opacity: 1 }}
  //       transition={{ delay: 8 }}
  //     ></motion.div>
  //     <Navbar />
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <>
  //             {loading} ?
  //             {
  //               <div className="flex absolute top-[40%] left-[40%] md:left-[45%] md:top-[45%] ">
  //                 <ClimbingBoxLoader
  //                   color="#EE4623"
  //                   loading={loading}
  //                   // cssOverride={override}
  //                   size={40}
  //                   aria-label="Loading Spinner"
  //                   data-testid="loader"
  //                 />
  //               </div>
  //             }
  //             :{<Navbar />}
  //             <Suspense fallback={<div>Loading......</div>}>
  //               <LazyLanding />
  //               <Footer />
  //             </Suspense>
  //           </>
  //         }
  //       />
  //       <Route
  //         path="technical"
  //         element={
  //           <>
  //             <Navbar />
  //             {/* <Technical /> */}
  //             <ParticleBG />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="team"
  //         element={
  //           <>
  //             <Navbar />
  //             <TeamNew />
  //           </>
  //         }
  //       />
  //     </Routes>
  //   </div>
  // );
}

export default App;

const Apply = () => {
  useEffect(() => {
    window.location.href = "https://codingninjasatsrm.com/domains";
  }, []);

  return <></>;
};
