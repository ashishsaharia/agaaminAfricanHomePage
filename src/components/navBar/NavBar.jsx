import JoinNow from "../buttons/joinNowButton";
import { Link } from "react-router-dom";
import NavFooterButton from '../buttons/nav-footerButton'
import Hamburger from '../hamburger/hamburger.jsx';
import Logo from '../logo/logo.jsx';
export default function Navbar(){
    return (
        <div className="navbarWrapper">

            <div className="navLogoWrapper">
                <Logo></Logo>
            </div>

            <div className="navButtonWrapper">
                <div className="navRouterButtonWrapper">
                    <NavFooterButton namePlaceholder={"Home"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"About"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Contact"}></NavFooterButton>
                    <NavFooterButton namePlaceholder={"Sign Up"}></NavFooterButton>
                    <Link to='/agaaminAfricanHomePage/dohSetup'><NavFooterButton namePlaceholder={"DOH Setup"}></NavFooterButton></Link>

                </div>
                    <JoinNow></JoinNow>
                    <div className="hamburgerWrapper">
                    <Hamburger></Hamburger>
            </div>

            </div>
        </div>
    )
}