import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share Pages/Footer';
import Navbar from '../pages/Share Pages/Navbar';

const Main = () => {
    console.log('connected')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;