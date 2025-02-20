import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="NetflixBackground.jpg" alt="BackgroundImage" />
      </div>
      <div className=" relative flex flex-col items-center h-screen justify-center">
        <div className="px-3 py-10 bg-black opacity-85 border flex flex-col items-center border-solid rounded-xl w-md">
          <h2 className="text-4xl text-white font-medium py-2 mb-6 w-full pl-10">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          <form className="text-white w-full py-4 px-10 flex flex-col gap-4 items-center justify-center">
            {!isSignInForm && (
              <input
                className="inputBox mb-4"
                type="text"
                placeholder="Enter Your Name"
              />
            )}
            <input
              className="inputBox mb-4"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="inputBox"
              type="password"
              placeholder="Password"
            />
            <button className="cursor-pointer bg-red-700 w-full py-2 mt-6 mb-3 rounded-sm">
              Sign In
            </button>
            <p className="w-full mt-5 cursor-pointer" onClick={toggleForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Account already exists. Log In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
