import Logo from "../../../../shared/components/Logo"
import NavbarNav from "../NavbarNav";
import Cart from "../../../Cart/components/Cart"

const Navbar = ()=>{
    return (
        <nav className="">
            <div className="container">
                <div className="navbar-row">
                    <Logo />
                    <NavbarNav />
                    <Cart />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;