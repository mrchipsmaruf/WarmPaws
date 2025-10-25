import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import app from '../Firebase/Firebase.config';
import { Navigate } from 'react-router';

const auth = getAuth(app);

const MyProfile = () => {
    const { user, refreshUser } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

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
        return <Navigate to="/auth/login" />;
    }

    return (
        <div className='flex items-center justify-center w-11/12 mx-auto bg-orange-50 p-6 md:p-20 '>
            <div className='bg-orange-100 rounded-3xl flex flex-col md:flex-row gap-5 w-full max-w-4xl p-6 md:p-10 items-center md:items-start'>
                {/* Profile Image */}
                <div className='flex justify-center md:justify-start w-full md:w-auto'>
                    <img className='w-32 md:w-[200px] h-32 md:h-[200px] rounded-full object-cover' src={user.photoURL} alt="User" />
                </div>

                <div className='text-center md:text-left flex flex-col space-y-3 w-full'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-orange-500'>{user.displayName}</h2>
                    <p className='text-orange-400 text-lg md:text-2xl'>{user.email}</p>

                    <form onSubmit={handleUpdate} className='flex flex-col space-y-3 mt-3'>
                        <input
                            className='p-2 focus:border-orange-300 text-sm text-orange-500 focus:outline-none rounded-full bg-orange-50'
                            type="text"
                            name="name"
                            placeholder='New Name'
                        />
                        <input
                            className='p-2 focus:border-orange-300 text-sm text-orange-500 focus:outline-none rounded-full bg-orange-50'
                            type="url"
                            name="photoURL"
                            placeholder='New Photo URL'
                        />
                        <button className='btn w-full rounded-full text-white bg-orange-500 py-2'>Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
