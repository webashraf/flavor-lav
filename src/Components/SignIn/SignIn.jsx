import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../contextProvider/AuthProvider";





const SignIn = () => {
  const [errorM, setErrorM] = useState(null);
  const { signInUserWithEmailPass, signUpWithGoogle, user } = useContext(ContextProvider);
  const location = useLocation();
  // console.log(location);
  const from = location.state.from.pathname || "/";
  // console.log(from);
  const navigate = useNavigate();


  // Google Sign Up //
  const googleSignUp = () => {
    // console.log("google SignUp clicked");
    signUpWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handeSignInUser = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    signInUserWithEmailPass(email, password)
    .then(result=> {
      console.log(result);
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    user && navigate(from, {replace: true})
  },[user])

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
            <div className="border border-amber-500 m-4 p-3 rounded-lg">
              {errorM}
            </div>
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
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />

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
              <button onClick={googleSignUp} className="btn bg-amber-600 border-amber-600 flex-grow">
                GOOGLE
              </button>
              <button className="btn flex-grow">GIT HUB</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
