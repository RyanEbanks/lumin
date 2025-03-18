
export default function About() {
    return (
        <div className="about-content-container">
            <h2>About Lumin</h2>
            <img src="about_video.gif" alt="About Image" className="about-img" />
            <div className="about-parent-container">
                <p className="about-title-first-child">OUR MISSION</p>
                <p className="about-text-first-child">At Lumin, we believe music is more than just sound—it’s an experience.
                    Our mission is to craft premium, high-performance headphones that elevate every
                    moment, whether you're unwinding at home, pushing limits in the gym, or exploring
                    the world.</p>
                <p className="about-title-second-child">WHAT WE OFFER</p>
                <p className="about-text-second-child">Designed with cutting-edge technology, superior sound engineering, and sleek
                    aesthetics, Lumin headphones are built for those who demand the best in both
                    style and performance. But we go beyond just audio quality—we offer
                    personalization that lets you make your headphones truly yours.</p>
                <p className="about-text-third-child">With Lumin, you’re not just listening. You’re feeling every beat, living
                    every note, and celebrating every sound.</p>
                <p className="about-text-fourth-child">Lumin – Celebrating Sound. Celebrating You.</p>
            </div>
            <div className="about-sponsor-container">
                <div className="scroll">
                    <div className="scroll-img-container" style={{ '--t': '15s;' } as React.CSSProperties}>
                        <img src="company/company-1.png" alt="big bold company" className="company-logo" />
                        <img src="company/company-2.png" alt="rimberio studio company" className="company-logo" />
                        <img src="company/company-3.png" alt="rimberio company" className="company-logo" />
                        <img src="company/company-4.png" alt="liceria company" className="company-logo" />
                        <img src="company/company-5.png" alt="borcelle company" className="company-logo" />
                        <img src="company/company-6.png" alt="eagles company" className="company-logo" />
                        <img src="company/company-7.png" alt="virus company" className="company-logo" />
                        <img src="company/company-8.png" alt="avert company" className="company-logo" />
                    </div>

                    {/* <div className="scroll-img-container" style={{ '--s': '15s;' } as React.CSSProperties}>
                        <img src="company/company-1.png" alt="big bold company" className="company-logo" />
                        <img src="company/company-2.png" alt="rimberio studio company" className="company-logo" />
                        <img src="company/company-3.png" alt="rimberio company" className="company-logo" />
                        <img src="company/company-4.png" alt="liceria company" className="company-logo" />
                        <img src="company/company-5.png" alt="borcelle company" className="company-logo" />
                        <img src="company/company-6.png" alt="eagles company" className="company-logo" />
                        <img src="company/company-7.png" alt="virus company" className="company-logo" />
                        <img src="company/company-8.png" alt="avert company" className="company-logo" />
                    </div> */}

                </div>
            </div>
        </div>
    );
}