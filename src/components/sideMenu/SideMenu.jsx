import './sideMenu.scss'

const SideMenu = () => {
    return (
        <div className="menuSlideContae">
            <div className="menuSlideWrapper">
                <div className="price"></div>
                <div className="divider"></div>
                <div className="show">
                    <div className="showInc">
                        <label htmlFor="inc">Show INC</label>
                        <input type="checkbox" id='inc' />
                    </div>
                    <div className="showNet">
                        <label htmlFor="net">Show NET</label>
                        <input type="checkbox" id='net' />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="stops">
                    <div className="filterHeading">Stops</div>
                    <div className="stopsWrapper">
                        <span>0</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3+</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="departure">
                    <div className="filterHeading">Departure form loaction</div>
                    <div className="departureWrapper">
                        <div className='departureWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='departureWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='departureWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='departureWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="arrival">
                    <div className="filterHeading">Arrival form loaction</div>
                    <div className="arrivalWrapper">
                        <div className='arrivalWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='arrivalWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='arrivalWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='arrivalWrapperBox'>
                            <i class="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="fare identifier"></div>
                <div className="airlines"></div>
            </div>
        </div>
    )
}

export default SideMenu