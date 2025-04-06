export default function FooterComp() {
    return (
        <footer className={"flex justify-between bg-black text-white h-[402px]"}>
            <div className={"flex justify-around"}>
                <div>
                    <h2>Abstract</h2>
                    <ul>
                        <li>Start trial</li>
                        <li>Pricing</li>
                        <li>Download</li>
                    </ul>
                </div>
                <div>
                    <h2>Resources</h2>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div>
                    <h2>Community</h2>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Podcast</li>
                    </ul>
                </div>
                <div>
                    <h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>
                    </ul>
                    <h3>Contact us</h3>
                    <ul>
                        <li>info@asbtract.com</li>
                    </ul>
                </div>
            </div>
            <div className={"block flex-column justify-end"}>
                <img src="../../images/logoFooter.png" alt="Logo" className={"w-[35px] h-[35px]"}/>
                <div>
                    <p>© Copyright 2025</p>
                    <p>Abstract Studio Design, Inc.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}