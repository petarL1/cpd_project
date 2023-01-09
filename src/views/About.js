const About = () => {
    document.body.className="about-body";
    let date= new Date();
    const year=date.getFullYear();
    return ( 
        <div className="about-main">
        <div className="about-wrapper">
            <div className="about-text-wrapper">
        <div className="about-heading">
            <h1>ABOUT US</h1> 
        </div>
        <div className="about-text">
            <p>Do It! is your own personal tracker for tasks, events, dates and future plans.<br /><br />
               Email: petar.lefteroski@isvma.uist.edu.mk<br />
               Mobile: 075-382-531 
            </p>
        </div>
        </div>
        <div className="about-img">
            <img src="./aboutusbg.jpg" alt="about"></img>
        </div>
        </div>
        <div className="about-footer">
                    <div className="about-footer-left">
                        <p>&copy; Do It {year} <br/> All rights reserved</p>
                    </div>
                    <div className="about-footer-right">
                        <p>Petar Lefteroski<br /> UIST OHRID</p>
                    </div>
            </div>
        </div>
);
}
 
export default About;