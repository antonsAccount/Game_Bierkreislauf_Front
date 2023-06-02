import { Link } from "react-router-dom"
import Logo from '../assets/logo-no-background.png'
export default function NavbarCss () {


    return (
        <div className="navbar">
            
            {/* <NavLink className="navItem" to="/Spiel">Spiel</NavLink>
            <NavLink className="navItem" to="/About">Über Uns</NavLink>
            <NavLink className="navItem" to="/Entwickler">Entwickler</NavLink> */}
            <Link to="/">
            <img src={Logo} alt="BeerLogo"/>
            </Link>
        </div>
    )
}
