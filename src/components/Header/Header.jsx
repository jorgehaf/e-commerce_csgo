import "./Header.scss"
import hamburgerMenu from "../../assets/Icons/IconsWhite/MenuWhite.svg"

const Header = (props) => {
    return (
        <header className="header">
            <div id="hamburgerMenu">
                <img src={hamburgerMenu} alt="" />
            </div>
            <div className="logo">
                <a href="/" id="title">
                    JORGIN GUNS
                </a>
                <div id="description">The better at cenary!</div>
            </div>
            <div className="account">
                <a href="/cart">
                    <div>Cart{'(' + props.totalItems + ')'}</div>
                </a>
                <a href="">
                    <div>My account</div>
                </a>
            </div>
        </header>
    )
}

export default Header;