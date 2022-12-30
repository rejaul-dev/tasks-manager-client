import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF7E3]">
      <div className="w-96  p-7">
        <h2 className="text-xl text-center font-bold">Sign Up </h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="w-full max-w-xs mt-2">
            <label className="block">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              className="py-2 p-2 w-full"
              placeholder="Name"
              {...register("Name", { required: "Name is required" })}
            />
          </div>
          <div className="w-full max-w-xs mt-4">
            <label className="block">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              className="py-2 p-2 w-full"
              placeholder="Email"
              {...register("email", { required: "Email Address is required" })}
            />
          </div>
          <div className="form-control w-full max-w-xs mt-4">
            <label className="">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="py-2 p-2 w-full"
              placeholder="******"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 character",
                },
              })}
            />
          </div>
          <input
            className="w-full bg-[#482307] text-white py-2 rounded-md cursor-pointer mt-4"
            type="submit"
            value="SignUp"
          />
        </form>
        <p className="mt-4">
          Already Have an Account?{" "}
          <Link className="text-[#482307] cursor-pointer" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
