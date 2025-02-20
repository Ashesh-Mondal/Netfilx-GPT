import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="NetflixBackground.jpg" alt="BackgroundImage" />
      </div>
      <div className=" relative flex flex-col items-center h-screen justify-center">
        <div className="px-3 py-10 bg-black opacity-85 border flex flex-col items-center border-solid rounded-xl w-md">
          <h2 className="text-4xl text-white font-medium py-2 mb-6 w-full pl-10">
            Sign In
          </h2>
          <form className="text-white w-full py-4 px-10 flex flex-col gap-4 items-center justify-center">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
