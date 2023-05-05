import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineGithub,
  AiOutlineGoogle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../contextProvider/AuthProvider";

const Register = () => {
  const [errorM, setErrorM] = useState(null);
  const [view, setView] = useState(false);

  const {
    registerEmailAndPass,
    signUpWithGoogle,
    signUpWithGitHub,
    signOutUser,
    user,
  } = useContext(ContextProvider);

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

  // Sign In with github //
  const githubSignUp = () => {
    signUpWithGitHub()
      .then((result) => {
        console.log(result);
      })
      .then((err) => {
        console.log(err);
      });
  };

  //sign up with email and password //
  const signUpWithEmailAndPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.userPhoto.value;
    const userName = form.name.value;

    console.log(email, password, photoUrl, userName);

    registerEmailAndPass(email, password)
      .then((result) => {
        setErrorM(null);
        updateUserProfile(result.user, userName, photoUrl);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("weak-password")) {
          setErrorM("Password is less than 6 characters ");
        } else {
          setErrorM(error.message);
        }
      });

    const updateUserProfile = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
      form.reset();
    };

    // signOutUser()
    // .then(result => console.log(result))
    // .catch(err => console.log(err))
  };

  return (
    <div className="py-20 mx-20">
      <div className="hero min-h-screen bg-base-200 py-14">
        <div className="hero-content flex-col ">
          <h1 className="text-6xl text-center py-14 font-bold uppercase">
            Register Now
          </h1>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="text-amber-500 m-4 p-3 rounded-lg">{errorM}</div>
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
                  type={view ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />

                {
                  <div className="mt-3" onClick={() => setView(!view)}>
                    {view ? (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    ) : (
                      <AiFillEye></AiFillEye>
                    )}
                  </div>
                }

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
                <AiOutlineGoogle className="text-xl"></AiOutlineGoogle> &nbsp;
                GOOGLE
              </button>
              <button onClick={githubSignUp} className="btn flex-grow">
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

export default Register;
