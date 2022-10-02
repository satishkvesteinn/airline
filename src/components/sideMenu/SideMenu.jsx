import { useState } from 'react'
import './sideMenu.scss'

const SideMenu = () => {

    const [values, setValue] = useState(100)

    const valueHandle = (e) => {
        setValue(e.target.value)
    }


    return (
        <div className="menuSlideContainer">
            <div className="menuSlideWrapper">
                <div className="divider"></div>
                <div className="price">
                    <div className="priceTops">
                        <div className="filterHeading">Price <span className='clear'>reset</span></div>
                        <div><i className="bi bi-dash"></i></div>
                    </div>
                    <div className="priceBottom">
                        <div className="priceBottomWrapper">
                            <div className="slidecontainer">
                                <input type="range" min="100" max="100000" step={100} value={values} className="slider" id="myRange" onChange={valueHandle} />
                            </div>
                            <div className="priceValue">
                                0 - {values}
                            </div>
                        </div>
                    </div>
                </div>
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
                            <i className="bi bi-sunrise"></i>
                            <span>06-12</span>
                        </div>
                        <div className='departureWrapperBox'>
                            <i className="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='departureWrapperBox'>
                            <i className="bi bi-sunset"></i>
                            <span>06-12</span>
                        </div>
                        <div className='departureWrapperBox'>
                            <i className="bi bi-moon-fill"></i>
                            <span>06-12</span>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="arrival">
                    <div className="filterHeading">Arrival form loaction</div>
                    <div className="arrivalWrapper">
                        <div className='arrivalWrapperBox'>
                            <i className="bi bi-sunrise"></i>
                            <span>06-12</span>
                        </div>
                        <div className='arrivalWrapperBox'>
                            <i className="bi bi-brightness-high-fill"></i>
                            <span>06-12</span>
                        </div>
                        <div className='arrivalWrapperBox'>
                            <i className="bi bi-sunset"></i>
                            <span>06-12</span>
                        </div>
                        <div className='arrivalWrapperBox'>
                            <i className="bi bi-moon-fill"></i>
                            <span>06-12</span>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="fare_identifier">
                    <div className="filterHeading">Fare identifier</div>
                    <div className="identifierWrapper">
                        <div className="identifierWrapperBox">
                            <div className="box" style={{ backgroundColor: "blue" }}></div>
                            <div className="box_number">234</div>
                        </div>
                        <div className="identifierWrapperBox">
                            <div className="box" style={{ backgroundColor: "orange" }}></div>
                            <div className="box_number">234</div>
                        </div>
                        <div className="identifierWrapperBox">
                            <div className="box" style={{ backgroundColor: "green" }}></div>
                            <div className="box_number">234</div>
                        </div>
                        <div className="identifierWrapperBox">
                            <div className="box" style={{ backgroundColor: "red" }}></div>
                            <div className="box_number">234</div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="airlines">
                    <div className="airlinesTops">
                        <div className="filterHeading">Airlines <span className='clear'>Clear</span></div>
                        <div><i className="bi bi-dash"></i></div>
                    </div>
                    <div className="airlinesBottom">
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                        <div className="airlinesBottomWrapper">
                            <div className="airlinesBottomleft">IniGo <span>39</span></div>
                            <div className="airlinesBottomRight">
                                <label htmlFor="price" className='price'>3,46,456</label>
                                <input type="checkbox" id='price' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu