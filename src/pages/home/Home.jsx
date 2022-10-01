import './home.scss';
import Navbar from '../../components/navbar/Navbar'
import Content from '../../components/content/Content';
import SideMenu from '../../components/sideMenu/SideMenu';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <div className="homeContainerLeft">
                    <SideMenu />
                </div>
                <div className="homeContainerRight">
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Home