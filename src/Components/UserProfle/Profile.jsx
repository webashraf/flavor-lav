import moment from "moment";
import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContextProvider } from "../../contextProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, signOutUser } = useContext(ContextProvider);
  // const navigate = useNavigate();
  // console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {})
      .catch((erorr) => {});
  };
  return (
    <>
      {user ? (
        <div className="p-20 shadow-2xl my-20">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6">
            <LazyLoadImage
              effect="blur"
              src={user.photoURL != null && user.photoURL}
              alt="profile-pic"
            />
          </div>

          <h3 className="text-xl">
            <span className="font-bold"></span>
            {user.displayName != null && user.displayName}
          </h3>

          <h3>
            <span className="font-bold">Email:</span> {user.email}
          </h3>

          <h4>
            <span className="font-bold">Register time:</span>{" "}
            {moment(`${user.metadata.creationTime}`).format("MMM D YY")}
          </h4>

          <h4>
            <span className="font-bold">Last Login:</span>{" "}
            {moment(`${user.metadata.lastSignInTime}`).format("MMM D YYYY")}
          </h4>
          <button
            onClick={handleSignOut}
            className="btn bg-lime-500 border-lime-500 rounded-sm mt-3 "
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen flex-col-reverse gap-10">
          <progress className="progress w-56 text-center"></progress>
          <div
            className="radial-progress"
            style={{
              "--value": "70",
              "--size": "12rem",
              "--thickness": "2rem",
            }}
          >
            70%
          </div>
          {<Navigate to={"/"}></Navigate>}
        </div>
      )}
    </>
  );
};

export default Profile;
