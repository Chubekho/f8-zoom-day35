import { NavLink } from "react-router";

import styles from "./Navigation.module.scss"

const navItems = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/Counter",
        title: "Counter"
    },
    {
        to: "/Todo",
        title: "Todo"
    },
    {
        to: "/Profile",
        title: "Profile"
    },
    {
        to: "/Products",
        title: "Products"
    },
    {
        to: "/Comments",
        title: "Comments"
    },
    {
        to: "/Weather",
        title: "Weather"
    },
    {
        to: "/Buttons",
        title: "Buttons"
    },
]

function Navigation() {
    return (
        <nav className={styles['nav-heading']}>
            <ul className={styles['nav-list']}>
                {navItems.map((navItem, index) =>
                    <li key={index}>
                        <NavLink
                            to={navItem.to}
                            className={({ isActive }) =>
                                `${isActive ? styles.active : ""} ${styles["nav-link"]}`
                            }
                        >
                            {navItem.title}
                        </NavLink>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Navigation;