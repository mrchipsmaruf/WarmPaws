import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-4xl font-bold'>Error 404</h1>
            <NavLink className={"flex justify-center"} to="/">
                <button className='btn'>
                    Back to Home
                </button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;