import { useEffect, useState } from "react";

export default function Navigation() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const checkDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(checkDark);
    }, []);

    const changeMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;

            //Toggle the light class
            if (newMode) {
                document.documentElement.classList.remove("light");
            } else {
                document.documentElement.classList.add("light");
            }

            return newMode;
        });
    }
    return (
        <div>
            {/* Navigation */}
            <nav className="nav-container">
                <ul className="nav-list-container">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <button onClick={changeMode}>
                        <img src={darkMode ? "moon_icon.svg" : "sun_icon.svg"} alt="theme icon" className="nav-icon" />
                    </button>
                </ul>
            </nav>
        </div>
    );
}