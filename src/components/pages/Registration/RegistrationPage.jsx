import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// react hook from 
import { useForm } from 'react-hook-form';
import InnerContainer from '../../containers/InnerContainer/InnerContainer';
// react-i cone 
import { FaEye, FaEyeSlash, } from "react-icons/fa";
// lottie animation 
import Lottie from "lottie-react";
import loginAnimation from "../../../animation-data/last.json";


const RegistrationPage = () => {
      const [isShowPass, setIsShowPass] = useState(false);
      const [success, setSuccess] = useState("");
      const [error, setError] = useState("");
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();
      const handleRegistrationFunc = (form) => {
            console.log(form);
      };
      return (
            <div>
                  <InnerContainer>
                        <div className="min-h-screen flex justify-center items-center">
                              <div className="flex justify-center items-center gap-6 flex-col md:flex-row">
                                    <div className="text-center">
                                          <Lottie animationData={loginAnimation}></Lottie>
                                    </div>

                                    <div className="max-w-md shadow-medium p-5 bg-white rounded-default">
                                          {/* from data  */}
                                          <form
                                                onSubmit={handleSubmit(handleRegistrationFunc)}
                                                className="space-y-3"
                                          >
                                                <h2 className="font-bold text-3xl text-[#F85455] mb-6">
                                                Please Register
                                                </h2>

                                                {/* name */}
                                                <div>
                                                      <label
                                                            htmlFor="name"
                                                            className="block mb-2 text-1xl text-sm font-medium text-black dark:text-white"
                                                      >
                                                            Name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="name"
                                                            className="w-full p-2 rounded border-spacing-2"
                                                            {...register("name", { required: true })}
                                                            placeholder="Enter Your name here"
                                                      />
                                                      {errors.name && (
                                                            <p className="text-red-500">This field is required</p>
                                                      )}
                                                </div>
                                                {/* email */}
                                                <div>
                                                      <label
                                                            htmlFor="email"
                                                            className="block mb-2 text-1xl text-sm font-medium text-black dark:text-white"
                                                      >
                                                            Email
                                                      </label>
                                                      <input
                                                            type="email"
                                                            id="email"
                                                            className="w-full p-2 rounded border-spacing-2"
                                                            {...register("email", { required: true })}
                                                            placeholder="Your email here"
                                                      />
                                                      {errors.email && (
                                                            <p className="text-red-500">This field is required</p>
                                                      )}
                                                </div>

                                                {/* password */}
                                                <div className="relative">
                                                      <label
                                                            htmlFor="password"
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white"
                                                      >
                                                            Password
                                                      </label>
                                                      <input
                                                            type={`${isShowPass ? "text" : "password"}`}
                                                            id="password"
                                                            className="w-full p-2 rounded border-spacing-2"
                                                            {...register("password", { required: true })}
                                                            placeholder="••••••••"
                                                      />
                                                      <span
                                                            className="absolute right-2 top-11 text-slate-300 cursor-pointer"
                                                            onClick={() => setIsShowPass(!isShowPass)}
                                                      >
                                                            {" "}
                                                            {isShowPass ? (
                                                                  <FaEye className="text-black"></FaEye>
                                                            ) : (
                                                                  <FaEyeSlash className="text-black"></FaEyeSlash>
                                                            )}{" "}
                                                      </span>
                                                      {errors.password && (
                                                            <p className="text-red-500">This field is required</p>
                                                      )}
                                                </div>

                                                <div>
                                                      <p className="text-sm font-medium text-black">
                                                            Already have account ?
                                                            <Link
                                                                  to="/login"
                                                                  className="font-sm text-[#0091F7] hover:underline dark:text-primary-500"
                                                            >
                                                                  Log In
                                                            </Link>
                                                      </p>
                                                </div>

                                                {error && <p className="text-red-500">*{error}</p>}
                                                {success && <p className="text-green-500">{success}</p>}

                                                <button
                                                      className="w-full bg-[#F75453] text-white font-semibold p-1 rounded-md hover:bg-black"
                                                      type="submit"
                                                >
                                                      Sign Up
                                                </button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </InnerContainer>
            </div>
      );
};

export default RegistrationPage;