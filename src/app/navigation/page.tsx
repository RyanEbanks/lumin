
export default function Navigation() {
    return(

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
            </ul>
        </nav>
    </div>
    );
}