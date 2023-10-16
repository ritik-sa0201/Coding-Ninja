import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "./Navbar.module.css"

function Navbar() {

    const [open, setopen] = useState(false);

    function toggle() {
        setopen(prevState => !prevState);
    }

    function goToTop() {
        document.getElementById("root").scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
        <>
            <div className={styles.nav}>

                <div className={styles.logo}><img src="https://files.codingninjas.com/new-cn-logos-31142.svg" alt="logo" /></div>

                <div className={styles.right}>

                    <div className={"bg-transparent py-6 flex flex-col justify-center sm:py-12 "+styles.menu}>
                        <div className="relative py-3 sm:max-w-xl mx-auto">
                            <nav x-data="{ open: false }">
                                <button className="text-white w-10 h-10 relative focus:outline-none bg-transparent" onClick={()=>setopen(open=>!open)}>
                                    <span className="sr-only">Open main menu</span>
                                    <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                                        <span aria-hidden="true" className={"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out "+(open ? 'rotate-45': '-translate-y-1.5') }></span>
                                        <span aria-hidden="true" className={"block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out "+(open ? 'opacity-0': '')}></span>
                                        <span aria-hidden="true" className={"block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out "+(open ? '-rotate-45': 'translate-y-1.5') }></span>
                                    </div>
                                </button>
                            </nav>
                        </div>
                    </div>
            
                    {open && <div className={styles.backdrop} onClick={toggle}></div>}

                    <div className={`${styles.dropdown} ${open ? styles.open : styles.close}`} onClick={toggle}>
                        <Link onClick={goToTop} to='/'><span className={styles.span}>Home</span></Link>
                        <Link onClick={goToTop} to='/events'><span className={styles.span}>Events</span></Link>
                        <Link onClick={goToTop} to='/team'><span className={styles.span}>Teams</span></Link>
                    </div>
                            

                    <div className={styles.links}>
                        <Link onClick={goToTop} to='/'><span className={styles.span}>Home</span></Link>
                        <Link onClick={goToTop} to='/events'><span className={styles.span}>Events</span></Link>
                        <Link onClick={goToTop} to='/team'><span className={styles.span}>Teams</span></Link>
                    </div>

                </div>

            </div>

            <Outlet />
            <Footer />
        </>
    )
}

export default Navbar;
