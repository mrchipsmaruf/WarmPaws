import { Link, NavLink } from 'react-router';
import logo from "../assets/petLogo.png";
import userImage from "../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout()
            .then(() => toast.success("Logout Successful"))
            .catch(error => toast.error(error.message));
    };

    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="w-11/12 mx-auto flex items-center justify-between py-2 md:py-3 relative">

                <div className="flex items-center gap-2 md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
                        <FaBars size={18} />
                    </button>
                    <div className={`flex flex-col gap-2 absolute top-full left-0 w-full bg-white p-3 shadow-md ${menuOpen ? 'block' : 'hidden'}`}>
                        <NavLink className="hover:text-orange-300" to="/">Home</NavLink>
                        <NavLink className="hover:text-orange-300" to="/services">Services</NavLink>
                        <NavLink className="hover:text-orange-300" to="/myProfile">My Profile</NavLink>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:justify-start md:flex-1">
                    <img className="w-10 md:w-14" src={logo} alt="Logo" />
                    <p className="text-lg md:text-2xl font-semibold">
                        Warm<span className="text-orange-400">Paws</span>
                    </p>
                </div>

                <div className="hidden md:flex flex-1 justify-center gap-6">
                    <NavLink className="hover:text-orange-300 text-base" to="/">Home</NavLink>
                    <NavLink className="hover:text-orange-300 text-base" to="/services">Services</NavLink>
                    <NavLink className="hover:text-orange-300 text-base" to="/myProfile">My Profile</NavLink>
                </div>

                <div className="flex gap-2 items-center md:flex-1 md:justify-end">
                    <Link to="/myProfile">
                        <img
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
                            src={user?.photoURL || userImage}
                            alt="User"
                            title={user?.displayName || "Guest"}
                        />
                    </Link>
                    {user ? (
                        <button onClick={handleLogout} className='btn text-xs md:text-sm px-2 py-1 md:px-4 md:py-2 bg-orange-50 hover:bg-orange-500 hover:text-white'>
                            Logout
                        </button>
                    ) : (
                        <Link to="/auth/login" className="btn text-xs md:text-sm px-2 py-1 md:px-4 md:py-2 bg-orange-50 hover:bg-orange-500 hover:text-white">
                            Login
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
