import './content.scss'

const Content = () => {
    return (
        <div className="contentContainer">
            <div className="left">
                <div className="top">
                    <span className="topleft">
                        <img src="https://m.economictimes.com/thumb/msid-67936192,width-472,height-354,resizemode-4,imgsize-59112/indigo.jpg" alt="" />
                    </span>
                    <span className="topRight">
                        <p className='flightName'>Go-First</p>
                        <p className='flightNumber'>G8-530</p>
                    </span>
                </div>
                <div className="bottom">
                    <button>View Details <i class="bi bi-plus"></i></button>
                    <p className='seats'>Seats left : 9</p>
                </div>
            </div>
            <div className="leftRight">
                <div className="leftRightLeft">
                    <div className="Top">DEL</div>
                    <div className="Middle">05:30</div>
                    <div className="Bottom">Oct 05</div>
                </div>
                <div className="leftRightMiddle">
                    <div className="Top">Non-Stop</div>
                    <div className="middleMiddle"></div>
                    <div className="Middle">2h 10m</div>
                </div>
                <div className="leftRightRight">
                    <div className="Top">BOM</div>
                    <div className="Middle">05:30</div>
                    <div className="Bottom">Oct 05</div>
                </div>
            </div>


            <div className="rightLeftContainer">
                <label className="rightLeftItem"  htmlFor='flight'>
                    <div className="rightLeftWrapper">
                        <div className="rightLeftTop">
                            <input type="radio" id='flight' name='flight'/>
                        </div>
                        <div className="rightLeftRight">
                            <div className="rightLeftRightTop">890763567</div>
                            <div className="rightLeftRightBottom">
                                <span className='price'>&#8377; 34,678</span>
                                <span>| INC 53.04 | NET 3.661.40</span>
                            </div>
                        </div>
                    </div>
                    <div className="rightLeftBottom">
                        <span className='coupon'>Coupon</span>
                        <span>, Economy ,</span>
                        <span>Refendable</span>
                    </div>
                </label>

                <label  htmlFor='flights' className="rightLeftItem">
                    <div className="rightLeftWrapper">
                        <div className="rightLeftTop">
                            <input type="radio" id='flights' name='flight'/>
                        </div>
                        <div className="rightLeftRight">
                            <div className="rightLeftRightTop">890763567</div>
                            <div className="rightLeftRightBottom">
                                <span className='price'>&#8377; 34,678</span>
                                <span>| INC 53.04 | NET 3.661.40</span>
                            </div>
                        </div>
                    </div>
                    <div className="rightLeftBottom">
                        <span className='coupon'>Coupon</span>
                        <span>, Economy ,</span>
                        <span>Refendable</span>
                    </div>
                </label>


                <label  htmlFor='flightss' className="rightLeftItem">
                    <div className="rightLeftWrapper">
                        <div className="rightLeftTop">
                            <input type="radio" id='flightss' name='flight'/>
                        </div>
                        <div className="rightLeftRight">
                            <div className="rightLeftRightTop">890763567</div>
                            <div className="rightLeftRightBottom">
                                <span className='price'>&#8377; 34,678</span>
                                <span>| INC 53.04 | NET 3.661.40</span>
                            </div>
                        </div>
                    </div>
                    <div className="rightLeftBottom">
                        <span className='published'>Published</span>
                        <span>, Economy ,</span>
                        <span>Refendable</span>
                    </div>
                </label>
            </div>
            <div className="right">
                <button>Book</button>
            </div>
        </div>
    )
}

export default Content