import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    
    return (
        <div className="max-w-[1240px] mx-auto">
      <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-green-400/20">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Create a Account</h1>
          <p className="text-sm dark:text-gray-400">
            Create a new account to get started
          </p>
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className=" mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-green-400 text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-black">
              Already have an account?{" "}
              <Link to='/login' className="text-green-400">
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Register;