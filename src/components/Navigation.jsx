import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <header>
                <Link className="site-logo" to="/">
                    #VANLIFE
                </Link>

                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/home">Vans</Link>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Navigation;
