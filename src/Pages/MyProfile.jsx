import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import app from '../Firebase/Firebase.config';
import { Navigate } from 'react-router';

const auth = getAuth(app);

const MyProfile = () => {
    let { user, refreshUser } = useContext(AuthContext);

    let handleUpdate = (e) => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value;
        let photoURL = form.photoURL.value;

        if (!name && !photoURL) {
            toast.error("Please fill out at least one field before updating!");
            return;
        }


        updateProfile(auth.currentUser, {
            displayName: name || auth.currentUser.displayName,
            photoURL: photoURL || auth.currentUser.photoURL
        })
            .then(() => {
                toast.success("Profile updated successfully!");
                refreshUser();
                form.reset();
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    if (!user) {
        return <Navigate to="/auth/login"></Navigate>;
    }

    return (
        <div className='flex items-center w-11/12 mx-auto justify-center bg-orange-50 p-10'>
            <div className='bg-orange-100 rounded-3xl flex gap-5 w-[700px] h-[600px] justify-center items-center '>
                <div>
                    <img className='w-[200px] rounded-full' src={user.photoURL} alt="User" />
                </div>
                <div className='text-center space-y-3'>
                    <h2 className='text-3xl font-semibold text-orange-500'>{user.displayName}</h2>
                    <p className='text-2xl text-orange-400'>{user.email}</p>
                    <form onSubmit={handleUpdate} className='flex flex-col space-y-3'>
                        <input className='p-2 focus:border-orange-300 text-sm text-orange-500 focus:outline-none rounded-full bg-orange-50' type="name" name="name" id="" placeholder='New Name' />
                        <input className='focus:border-orange-300 text-sm text-orange-500 focus:outline-none p-2 rounded-full bg-orange-50' type="url" name="photoURL" placeholder='photoURL' id="" />
                        <button className='btn w-full rounded-full text-white bg-orange-500'>Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;