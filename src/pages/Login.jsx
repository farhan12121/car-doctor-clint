import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                navigate('/')
            })

            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col justify-between lg:flex-row     ">
                <div className="w-1/2 mr-10">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='px-10 pb-5 text-lg font-semibold'>New To Car Doctor? <Link className='text-[#FF3811]' to={'/signUp'}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;