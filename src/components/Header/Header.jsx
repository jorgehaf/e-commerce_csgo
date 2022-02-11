import homeActions from "../../store/actions/home";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'

import "./Header.scss"
import hamburgerMenu from "../../assets/Icons/IconsWhite/MenuWhite.svg"

const Header = (props) => {
    const dispatch = useDispatch();

    const location = useLocation();

    return (
        <header className="header">

            <div id="menuLogo">
                { location.pathname === '/' &&
                    <div id="hamburgerMenu">
                    <img onClick={() => dispatch(homeActions.displayHamburger())} src={hamburgerMenu} alt="Menu" />
                </div>
                }
                <div className="logo">
                    <a href="/" id="title">
                        JORGIN GUNS
                    </a>
                    <div id="description">The better at cenary!</div>
                </div>
            </div>
            <div className="account">
                <a href="/cart">
                    <div className="nameCart">Cart <div className="totalItems">{props.totalItems}</div></div>
                </a>
                <a href="">
                    <div>My account</div>
                </a>
            </div>
        </header>
    )
}

export default Header;