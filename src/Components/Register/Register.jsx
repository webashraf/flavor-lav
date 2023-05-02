import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../contextProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [errorM, setErrorM] = useState(null);
  const { registerEmailAndPass, signUpWithGoogle } = useContext(ContextProvider);

  // Sign up with google
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

  //sign up with email and password //
const signUpWithEmailAndPass = e =>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const photoUrl = form.userPhoto.value;
  const userName = form.name.value;

  console.log(email, password, photoUrl, userName);

  registerEmailAndPass(email, password)
  .then(result => {
    console.log(result.user);
    updateUserProfile(result.user, userName, photoUrl);
  })
  .catch(err => console.log(err))

const updateUserProfile = (user, name, photo) =>{
  updateProfile(user, {
    displayName: name, 
    photoURL: photo
  })
  .then(result => console.log(result))
  .catch(err => console.log(err))
}


}

  return (
    <div className="py-20 mx-20">
      <div className="hero min-h-screen bg-base-200 py-14">
        <div className="hero-content flex-col ">
          <h1 className="text-6xl text-center py-14 font-bold uppercase">
            Register Now
          </h1>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="border border-amber-500 m-4 p-3 rounded-lg">
              {errorM}
            </div>
            <form onSubmit={signUpWithEmailAndPass} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>

                <input
                  type="text"
                  placeholder="Photo Url"
                  name="userPhoto"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
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
                <button className="btn bg-lime-600 border-lime-600 mb-2 ">
                  Sign Up
                </button>
                <p className="text-center">
                  Allready have an account ?{" "}
                  <Link className="text-lime-500" to={"/signin"}>
                    Login now!!
                  </Link>
                </p>
              </div>
            </form>
            <div className="flex justify-between mt-3 gap-6 px-6 pb-4">
              <button
                onClick={googleSignUp}
                className="btn bg-amber-600 border-amber-600 flex-grow"
              >
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

export default Register;
