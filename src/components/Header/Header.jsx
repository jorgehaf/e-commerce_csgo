import "./Header.scss"

const Header = (props) => {
    return (
        <header className="header">
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