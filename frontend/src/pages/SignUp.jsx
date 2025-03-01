import { useState } from "react";

export default function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <section className="bg-neutral-900 min-h-screen flex box-border justify-center items-center">
            <div className="bg-sky-500 rounded-2xl flex max-w-3xl p-5 items-center h-[100vh]">
                <div className="md:w-1/2 px-8">
                    <h2 className="font-bold text-3xl text-[#002D74]">Sign Up</h2>
                    <p className="text-sm mt-4 text-[#002D74]">
                        Create an account to get started.
                    </p>

                    <form className="flex flex-col gap-4">
                        <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Full Name" />
                        <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email" />
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type={passwordVisible ? "text" : "password"} name="password" id="password" placeholder="Password" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="gray"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                                viewBox="0 0 16 16"
                            >
                                {passwordVisible ? (
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                                ) : (
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                )}
                            </svg>
                        </div>
                        <button className="bg-sky-700 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-6 items-center text-gray-100">
                        <hr className="border-gray-300" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-300" />
                    </div>

                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                        <svg
                            className="mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="25px"
                            alt="Google login icon"
                        >
                            <path fill="#4285F4" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FBBC05" d="M6.306,14.691l6.543,4.797c1.775-3.528,5.5-6.036,9.651-6.036c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.282,4,9.584,8.239,6.306,14.691z" />
                            <path fill="#EA4335" d="M24,44c6.235,0,11.685-2.386,15.849-6.26l-7.203-5.969c-2.128,1.428-4.703,2.265-7.646,2.265c-5.212,0-9.646-3.351-11.303-8H6.165v5.07C10.315,38.135,16.662,44,24,44z" />
                        </svg>
                        Sign Up with Google
                    </button>

                    <div className="mt-10 text-sm flex justify-between items-center container-mr">
                        <p className="mr-3 md:mr-0">Already have an account?</p>
                        <button className="hover:border register text-white bg-sky-700 hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300" type="button">
                            Login
                        </button>
                    </div>
                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl max-h-[1600px]" src="https://i.pinimg.com/736x/fa/4e/e5/fa4ee5cfb18a9cc274f8338deaf3944e.jpg" alt="Signup form illustration" />
                </div>
            </div>
        </section>
    );
}
