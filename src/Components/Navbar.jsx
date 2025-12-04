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
        <div className="sticky top-0 z-50 bg-orange-50 shadow-md">
            <div className="w-11/12 mx-auto flex items-center justify-between py-2 md:py-3 relative">

                {/* ========== Mobile Menu Button ========== */}
                <div className="flex items-center gap-2 md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
                        <FaBars size={22} />
                    </button>

                    {/* ========== Mobile Dropdown Menu ========== */}
                    <div
                        className={`flex flex-col gap-3 absolute top-full left-0 w-full bg-orange-50 p-4 shadow-md transition-all ${
                            menuOpen ? "block" : "hidden"
                        }`}
                    >
                        <NavLink className="hover:text-orange-500" to="/">Home</NavLink>
                        <NavLink className="hover:text-orange-500" to="/services">All Services</NavLink>
                        <NavLink className="hover:text-orange-500" to="/about">About Us</NavLink>
                        <NavLink className="hover:text-orange-500" to="/contact">Contact</NavLink>
                        <NavLink className="hover:text-orange-500" to="/support">Support</NavLink>

                        {user && (
                            <NavLink className="hover:text-orange-500" to="/myProfile">My Profile</NavLink>
                        )}
                    </div>
                </div>

                {/* ========== Logo ========== */}
                <div className="flex items-center gap-2 md:flex-none">
                    <img className="w-10 md:w-14" src={logo} alt="Logo" />
                    <p className="text-lg md:text-2xl font-semibold">
                        Warm<span className="text-orange-500">Paws</span>
                    </p>
                </div>

                {/* ========== Desktop Menu ========== */}
                <div className="hidden md:flex justify-center items-center gap-6 text-base font-medium flex-none">
                    <NavLink to="/" className="hover:text-orange-500">Home</NavLink>
                    <NavLink to="/services" className="hover:text-orange-500">All Services</NavLink>
                    <NavLink to="/about" className="hover:text-orange-500">About Us</NavLink>
                    <NavLink to="/contact" className="hover:text-orange-500">Contact</NavLink>
                    <NavLink to="/support" className="hover:text-orange-500">Support</NavLink>

                    {user && (
                        <NavLink to="/myProfile" className="hover:text-orange-500">
                            My Profile
                        </NavLink>
                    )}
                </div>

                {/* ========== User Section ========== */}
                <div className="flex items-center gap-2 md:flex-none">
                    <Link to={user ? "/myProfile" : "/auth/login"}>
                        <img
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
                            src={user?.photoURL || userImage}
                            alt="User"
                            title={user?.displayName || "Guest"}
                        />
                    </Link>

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="btn text-sm px-3 py-1 md:px-4 md:py-2 bg-orange-100 hover:bg-orange-500 hover:text-white"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/auth/login"
                            className="btn text-sm px-3 py-1 md:px-4 md:py-2 bg-orange-100 hover:bg-orange-500 hover:text-white"
                        >
                            Login
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
