
import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('hi',location);

        const handleLogin = e =>{
            e.preventDefault();
            // const email = e.target.email.value;
            // const password = e.target.password.value;
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');

            // user login
            signIn(email, password)
            .then(result =>{
                console.log(result.user);

                //navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error=>{
                console.error(error);
            })
        }

    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-3">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="mb-4 text-center">Don’t Have An Account ? 
                        <Link className="text-red-700" to='/register'> Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;