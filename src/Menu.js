import classes from './Menu.module.scss'
import { NavLink } from 'react-router-dom'

export function Menu() {
    return (
        <ol className={classes.Menu}>
            <li className={classes["Menu-item"]}>
                <NavLink
                    className={classes["Menu-link"]}
                    to="/"
                >
                    Главная
                </NavLink>
            </li>
            <li className={classes["Menu-item"]}>
                <NavLink
                    className={classes["Menu-link"]}
                    to="/catalog"
                >
                    Catalog
                </NavLink>
            </li>
        </ol>
    );
}