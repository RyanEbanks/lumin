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
            <nav className="flex flex-row w-full mt-5">
                <div className="flex w-1/4 ml-20 items-center">
                    <p>Lumin</p>
                </div>
                <ul className="flex flex-row space-x-8 w-1/4 justify-end items-center ml-[40%]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <button className="" onClick={changeMode}>
                        <img src={darkMode ? "moon_icon.svg" : "sun_icon.svg"} alt="theme icon" className="w-4 h-4" />
                    </button>
                </ul>
            </nav>
        </div>
    );
}