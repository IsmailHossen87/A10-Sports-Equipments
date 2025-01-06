import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginGoogle, loginByemail } = useContext(AuthContext);

  const handleLoginGoogle = () => {
    loginGoogle()
      .then((result) => {
        if (result.user) {
          Swal.fire("Good job!", "You logged in successfully!", "success");
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("Sorry", "Something went wrong during login", "error");
      });
  };

  const handleLoginEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginByemail(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire("Good job!", "You logged in successfully!", "success");
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("Sorry", "Invalid email or password", "error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold !text-black">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginEmail} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt !text-black link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="mt-2">
            <p className="flex justify-center font-sans !text-black text-sm font-light leading-normal text-inherit antialiased">
              Don't have an account?
              <Link to="/register">
                <span className="text-red-600 ml-2 font-bold">Sign up</span>
              </Link>
            </p>
          </div>
          <div className="flex justify-center p-5">
            <button
              onClick={handleLoginGoogle}
              className="btn"
            >
              <FcGoogle className="text-3xl" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
