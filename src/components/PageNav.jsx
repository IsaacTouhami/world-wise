import { NavLink } from "react-router-dom";
import styles from './PageNav.module.css'

function PageNav({current}) {
    return (
    <nav  className={styles.nav}>
    <ul>
        <li className={current===1 && styles.current}>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className={current===2 && styles.current}>
            <NavLink to='/product'>Product</NavLink>
        </li>
        <li className={current===3 && styles.current}>
            <NavLink to='/pricing'>Pricing</NavLink>
        </li>
    </ul>
    </nav>
    );
}

export default PageNav;