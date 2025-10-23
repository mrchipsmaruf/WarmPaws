import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-4xl font-bold py-20 '>Error 404</h1>
            <Link to="/" className="flex items-center mx-auto justify-center w-3xl btn">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;