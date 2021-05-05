import {NavLink} from "react-router-dom";

import {items} from "./items";

const NavbarNav = ()=> {
    const menuElements = items.map(({id, to, text}) => {
        return (
            <li key={id}>
                <NavLink to={to}>
                    {text}
                </NavLink>
            </li>
        )
    });

    return (
        <ul>
            {menuElements}
        </ul>
    )
}

export default NavbarNav;