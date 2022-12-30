import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { loginUser, providerLogin } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.pathname || "/";

  // login with google
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        toast.success("Successfully Logged In");
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => setLoginError(error));
  };

  // login with email and password
  const handleLogin = (data) => {
    setLoginEmail("");
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })

      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF7E3]">
      <div className="w-96  p-7">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="w-full max-w-xs">
            <label className="block">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              className="py-2 p-2 w-full"
              placeholder="Email"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="mt-4">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="py-2 p-2 w-full"
              placeholder="******"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <input
            className="w-full bg-[#482307] text-white py-2 rounded-md cursor-pointer mt-4"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-4">
          New to Tasks Manager?{" "}
          <Link className="text-[#482307] cursor-pointer " to="/register">
            Create a account
          </Link>
        </p>
        <div className="text-center mt-4">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-[#482307] text-white py-2 rounded-md cursor-pointer mt-4"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
