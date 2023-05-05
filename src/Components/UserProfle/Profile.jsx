import React, { useContext } from "react";
import { ContextProvider } from "../../contextProvider/AuthProvider";
import moment from "moment";

const Profile = () => {
  const { user } = useContext(ContextProvider);
  console.log(user);
  return (
    <>
      {user ?
        <div className="p-20 shadow-2xl my-20">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6">
            <img src={ (user.photoURL != null) &&  user.photoURL} alt="" />
          </div>

          <h3 className="text-xl">
            <span className="font-bold"></span>
            {(user.displayName != null)  && user.displayName}
          </h3>

          <h3>
            <span className="font-bold">Email:</span> {user.email}
          </h3>

          <h4>
            <span className="font-bold">Register time:</span>{" "}

        {moment(`${user.metadata.creationTime}`).format("MMM D YY")}
          </h4>

          <h4>
            <span className="font-bold">Last Login:</span> {moment(`${user.metadata.lastSignInTime}`).format('MMM D YYYY')} 
          </h4>
        </div> :       <div className="flex justify-center items-center h-screen flex-col-reverse gap-10">
        <progress className="progress w-56 text-center"></progress>
        <div
          className="radial-progress"
          style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
        >
          70%
        </div>
      </div>
      }
    </>
  );
};

export default Profile;
