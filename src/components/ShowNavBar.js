import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNavBar = ({children}) =>
{
    const location = useLocation();

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if(location.pathname === '/login' || location.pathname === '/') setShowNav(false);
        else setShowNav(true);
    }, [location]);

    return (
        <div>{(showNav && children)}</div>
    );
}

export default ShowNavBar;