function Home(){
    let date= new Date();
    const year=date.getFullYear();
    document.body.className="home-body";
    return(
        <div className="home-main">
            <div className="home-heading">
                <h1>Raise your productivity to the max!</h1>
                <h2>Your personal everyday tracker</h2>
            </div>
            <div className="home-section">
                <div className="section-1">
                <div className="sec1-img">
                    <img src="https://images.pexels.com/photos/7718871/pexels-photo-7718871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="be productive"></img>
                </div>
                <div className="sec1-text">
                    <p>
                        If you want to keep track of all of your tasks at once, you've come to the right place!
                        <li>&nbsp;</li>
                        <li>Keep track of your tasks with our To-do list.</li>
                    </p>
                </div>
                </div>
                <div className="section-2">
                    <div className="sec2-left">
                        <p>&copy; Do It {year} <br/> All rights reserved</p>
                    </div>
                    <div className="sec2-middle">
                        <img src="/check.png" alt="check"></img>
                    </div>
                    <div className="sec2-right">
                        <p>Petar Lefteroski<br /> UIST OHRID</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Home;