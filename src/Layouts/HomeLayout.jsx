import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50  w-11/12 mx-auto bg-white">
                <Navbar></Navbar>
            </header>

            <main className="flex-1">
                {state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </main>

            <footer className="bg-gray-100 w-11/12 mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
