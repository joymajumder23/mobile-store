import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/iphone">iPhone</NavLink></li>
        <li><NavLink to="/samsung">Samsung</NavLink></li>
        <li><NavLink to="/oneplus">Oneplus</NavLink></li>
    </>;
    const {user, logout} = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a><Link to="/">Home</Link></a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    {links}
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost text-xl">MobileStore</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a>Home</a></li></Link>
                        <li>
                            <details>
                                <summary>Categories</summary>
                                <ul className="p-2">
                                    {links}
                                </ul>
                            </details>
                        </li>
                        <li><a><Link>Add Product</Link></a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="avatar mr-4">
                    <div className="w-10 rounded-xl">
                       {
                        user?  <img src={user.photoURL} /> : ""
                       }
                    </div>
                </div>
               {
                 user? 
                 <a onClick={logout} className="btn">Logout</a>
                 :
                 <Link to="/login"><a className="btn">Login</a></Link>
               }
                </div>
            </div>
        </div>
    );
};

export default Navbar;