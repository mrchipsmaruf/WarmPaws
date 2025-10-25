import { Link, NavLink, useNavigate } from 'react-router';
import logo from "../assets/petLogo.png";
import userImage from "../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {
    let navigate = useNavigate();
    let { user, logout, loading } = useContext(AuthContext);

    let handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Logout Successful");
                navigate("/auth/login");
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    if (loading) {
        return null;
    }

    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className='w-11/12 mx-auto flex justify-around gap-20 items-center py-3'>
                <div className='flex items-center gap-3'>
                    <img className='w-[70px]' src={logo} alt="Logo" />
                    <p className='font-semibold text-2xl'>
                        Warm<span className='text-orange-400'>Paws</span>
                    </p>
                </div>

                <div className='flex gap-10'>
                    <NavLink className="hover:text-orange-300" to="/">Home</NavLink>
                    <NavLink className="hover:text-orange-300" to="/services">Services</NavLink>
                    <NavLink className="hover:text-orange-300" to="/myProfile">My Profile</NavLink>
                </div>

                <div className='flex items-center gap-5'>
                    <Link to="/myProfile">
                        <img
                            className="w-[40px] h-[40px] rounded-full cursor-pointer"
                            src={user?.photoURL || userImage}
                            alt="User"
                            title={user?.displayName || "Guest"}
                        />
                    </Link>
                    {user ? (
                        <button onClick={handleLogout} className='btn text-black hover:text-white bg-orange-50 hover:bg-orange-500'>
                            Logout
                        </button>
                    ) : (
                        <Link to="/auth/login" className="btn text-black hover:text-white bg-orange-50 hover:bg-orange-500">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
