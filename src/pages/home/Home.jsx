import './home.scss';
import Navbar from '../../components/navbar/Navbar'
import Content from '../../components/content/Content';
import SideMenu from '../../components/sideMenu/SideMenu';
import { useState } from 'react';

const Home = () => {
    const [show, setShow] = useState(true)

    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <div className="homeContainerLeft" style={{ left: `${show ? "-350px" : "0%"}` }}>
                    <SideMenu />
                    <button onClick={() => setShow(!show)}><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="homeContainerRight">
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <div className='filter' onClick={() => setShow(!show)} style={{ display: `${show ? "flex" : "none"}`, right: `${show ? "10px" : "-100px"}` }}>
                        <i className="bi bi-gear"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home