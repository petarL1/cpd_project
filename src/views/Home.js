import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const [isVisible, setIsVisible] = useState(true);
    const [,setHeight] = useState(0);

    function vh(percent) {
        let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (percent * h) / 100;
      }

    useEffect(() => {  
        window.addEventListener("scroll", listenToScroll);
            return () => 
        window.removeEventListener("scroll", listenToScroll); 
      })

    const listenToScroll = () => {
        let heightToHideFrom = vh(65);
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        setHeight(winScroll);
    
        if (winScroll > heightToHideFrom) {  
             isVisible && setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
    };
    
    window.onbeforeunload = function() {window.scrollTo(0);}

    let date= new Date();
    const year=date.getFullYear();
    document.body.className="home-body";
    
    function topFunction() {
    document.documentElement.scrollTop = 0; //OTHER BROWSERS
    document.body.scrollTop = 0; //SAFARI
};
    return(
        <div className="home-main">
            { isVisible &&
            <div className="home-heading">
                <h1>Raise your productivity to the max!</h1>
                <h2>Your personal everyday tracker</h2>
            </div>
            }
            <div className="home-section">
                <div className="section-1">
                <div className="sec1-img">
                    <img src="/todo.png" alt="Do It to-do list"></img>
                </div>
                <div className="sec1-text">
                    <p>
                        If you want to keep track of all of your tasks at once, you've come to the right place!
                        <li>&nbsp;</li>
                        <li>Keep track of your tasks with our To-do list.</li>
                        <Link to={'/todo'} className="btn btn-sec1" style={{textDecoration:'none'}}>Go there now!</Link>
                    </p>
                </div>
                </div>
                <div className="seperator"/>
                <div className="section-2">
                <div className="sec2-text">
                    <p>
                        Look at your upcoming events with our Calendar.<br /><br />
                        <li>Add events to certain dates or ranges and easily plan your future work.</li>
                        <Link to={'/calendar'} className="btn btn-sec2" style={{textDecoration:'none'}}>Take me there!</Link>
                    </p>
                </div>
                <div className="sec2-img">
                    <img src="/calendar.png" alt="React Calendar"></img>
                </div>
                </div>
                <div className="seperator"/>
                <div className="section-3">
                <div className="sec3-img">
                    <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="About Us"></img>
                </div>
                <div className="sec3-text">
                    <p>
                        Want to learn more about us?<br /><br />
                        <li>Check out our About Us page right now!</li>
                        <Link to={'/about'} className="btn btn-sec3" style={{textDecoration:'none'}}>Learn More</Link>
                    </p>
                </div>
                </div>
                <div className="footer">
                    <div className="footer-left">
                        <p>&copy; Do It {year} <br/> All rights reserved</p>
                    </div>
                    <div className="footer-middle">
                        <button type="button" className="scroll-btn" onClick={topFunction}>Go back to top</button>
                    </div>
                    <div className="footer-right">
                        <p>Petar Lefteroski<br /> UIST OHRID</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Home;