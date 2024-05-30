import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
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
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-white bg-[#FF3811]" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className=' text-center px-10 pb-5 text-lg font-semibold'>Already Have An Account? <Link className=' text-[#FF3811]' to={'/login'}>LogIn Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;