import './navbar.scss'

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="navbarWrapper">
                <div className="navbarWrapperTop">
                    <div className="navbarSection">
                        <div className="navbarSectionLeft">
                            <div className="navbarSectionLeftTop">DEL</div>
                            <div className="navbarSectionLeftBottom">Delhi, India</div>
                        </div>
                        <div className="navbarSectionMiddle">
                            <i className="bi bi-airplane-fill"></i>
                        </div>
                        <div className="navbarSectionRight">
                            <div className="navbarSectionLeftTop">BOM</div>
                            <div className="navbarSectionLeftBottom">Mumbai, India</div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="navbarWrapperMiddle">
                    <div className="navbarSection">
                        <div className="navbarSectionLeftBottom">Departure Date</div>
                        <div className="navbarSectionLeftTop">Wed, 5 Oct 2022</div>
                    </div>
                    <div className="divider"></div>
                    <div className="navbarSection">
                        <div className="navbarSectionLeftBottom">Passengers & Class</div>
                        <div className="navbarSectionLeftTop">1 Adult | ECONOMY</div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="navbarWrapperBottom">
                    <div className="navbarSection">
                        <div className="navbarSectionLeftBottom">Prefered Airline</div>
                        <div className="navbarSectionLeftTop">None</div>
                    </div>
                    <div className="divider"></div>
                    <div className="navbarSection">
                        <button>Modify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar