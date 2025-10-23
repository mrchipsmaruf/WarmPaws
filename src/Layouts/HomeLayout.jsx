import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const HomeLayout = () => {
    let { state } = useNavigation();
    return (
        <div className='w-11/12 mx-auto'>
            <header className='sticky top-0 h-fit'>
                <Navbar></Navbar>
            </header>
            <main>
                {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;