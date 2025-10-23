import { Link, NavLink, useNavigate } from 'react-router';
import logo from "../assets/petLogo.png"
import userImage from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {
    let navigate = useNavigate();
    let { user, logout } = useContext(AuthContext);
    let handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Logout Successful");
                navigate("/auth/login");
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className='w-11/12 mx-auto flex justify-around gap-20 items-center pt-3 bg-white'>
            <div className='flex items-center gap-3'>
                <img className='w-[70px]' src={logo} alt="" />
                <p className='font-semibold text-2xl'>Warm<span className='text-orange-400'>Paws</span></p>
            </div>
            <div className='flex gap-10'>
                <NavLink className={"hover:text-orange-300"} to="/">Home</NavLink>
                <NavLink className={"hover:text-orange-300"} to="/services">Services</NavLink>
                <NavLink className={"hover:text-orange-300"} to="/myProfile">My Profile</NavLink>
            </div>
            <div className='flex items-center gap-5'>
                <img className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer" src={`${user ? user.photoURL : userImage}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-neutral btn-outline'>
                        Logout
                    </button> : <Link to="/auth/login" className="btn btn-neutral btn-outline">
                        Login
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;