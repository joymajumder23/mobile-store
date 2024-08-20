import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    // console.log(githubLogin);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Login');
                if (result.user) {
                    navigate(location?.state ? location.state : "/");
                }
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

        setError('');
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                toast.success('Successfully Login');
                if (result.user) {
                    navigate(location?.state ? location.state : "/");
                }

            })
            .catch(error => {
                // console.log(error.message);
                toast.error(error.message);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <small className='text-red-600'>{error}</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-3">Login</button>
                                <hr />
                                <button onClick={handleGoogle} className="btn bg-base-200 mt-3"><FcGoogle></FcGoogle> Google</button>
                            </div>
                            <div>
                                <p>Don't have an Account <Link className="font-bold" to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;