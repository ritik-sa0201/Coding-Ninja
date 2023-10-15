import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "./Navbar.module.css"

function Navbar() {

    const [isOpen, setIsOpen] = useState();

    function toggle() {
        setIsOpen(prevState => !prevState);
    }

    function goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
        <>
            <div className={styles.nav}>
                <div className={styles.logo}><img src="https://files.codingninjas.com/new-cn-logos-31142.svg" alt="logo" /></div>
                <div className={styles.right}>
        
                    {isOpen ?
                        <>
                            <svg className={styles.svg} onClick={toggle} width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="m21.1 5.1-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9Z" fill="currentColor"></path></svg>

                            <div className={styles.backdrop} onClick={toggle}></div>

                            <div className={styles.dropdown} onClick={toggle}>
                                <Link onClick={goToTop} to='/'><span className={styles.span}>Home</span></Link>
                                <Link onClick={goToTop} to='/events'><span className={styles.span}>Events</span></Link>
                                <Link onClick={goToTop} to='/team'><span className={styles.span}>Teams</span></Link>
                            </div>
                        </>
                        :
                        <svg className={styles.svg} onClick={toggle} width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,<path d="M2 15h20v3H2v-3Z" fill="currentColor"></path></svg>
                    }

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
