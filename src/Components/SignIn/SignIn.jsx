import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../contextProvider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";

const SignIn = () => {
  const { signInUserWithEmailPass, signUpWithGoogle, user, signUpWithGitHub } =
    useContext(ContextProvider);
  const [view, setView] = useState(false);
  const location = useLocation();
  // console.log(user);
  const from = location?.state?.from?.pathname || "/";
  // console.log(from);
  const navigate = useNavigate();

  // Sign in with email and password //
  const handeSignInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUserWithEmailPass(email, password)
      .then((result) => {
        console.log(result);
        form.reset();
      })
      .catch((err) => console.log(err));
      form.reset();
  };

  // Google Sign in //
  const googleSignIn = () => {
    // console.log("google SignUp clicked");
    signUpWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Sign In with github //
  const githubSignIn = () => {
    signUpWithGitHub()
      .then((result) => {
        console.log(result);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    user && navigate(from, { replace: true });
  }, [user]);

  return (
    <div className="py-20 mx-20">
      <div className="hero min-h-screen bg-base-200 py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handeSignInUser} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type={view ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />

                {
                  <div className="mt-3" onClick={() => setView(!view)}>
                    {view ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}
                  </div>
                }


                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-lime-600 border-lime-600">
                  Login
                </button>
              </div>
              <p className="text-center">
                Are you new to here{" "}
                <Link className="text-lime-500" to={"/register"}>
                  register now!!
                </Link>{" "}
              </p>
            </form>
            <div className="flex justify-between mt-3 gap-6 px-6 pb-4">
              <button
                onClick={googleSignIn}
                className="btn bg-amber-600 border-amber-600 flex-grow"
              >
                <AiOutlineGoogle className="text-xl"></AiOutlineGoogle> &nbsp;
                GOOGLE
              </button>
              <button onClick={githubSignIn} className="btn flex-grow">
                {" "}
                <AiOutlineGithub className="text-xl"></AiOutlineGithub> &nbsp;
                GIT HUB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
