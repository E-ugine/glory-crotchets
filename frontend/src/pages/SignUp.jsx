import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setPassword } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const dispatch = useDispatch();
    const { name, email, password } = useSelector((state) => state.user);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Details:", { name, email, password });

        // Clear input fields after submission
        dispatch(setName(""));
        dispatch(setEmail(""));
        dispatch(setPassword(""));
    };

    const handleGoogleSignup = () => {
        console.log("Google Sign-Up Clicked!");
        // Implement Google OAuth here
    };

    return (
        <section className="bg-neutral-900 min-h-screen flex box-border justify-center items-center">
            <div className="bg-sky-500 rounded-2xl flex max-w-3xl p-5 items-center h-[100vh]">
                <div className="md:w-1/2 px-8">
                    <h2 className="font-bold text-3xl text-[#002D74]">Sign Up</h2>
                    <p className="text-sm mt-4 text-[#002D74]">Create an account to get started.</p>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            className="p-2 mt-8 rounded-xl border"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                        />
                        <input
                            className="p-2 rounded-xl border"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                        />
                        <div className="relative">
                            <input
                                className="p-2 rounded-xl border w-full"
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => dispatch(setPassword(e.target.value))}
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                            >
                                {passwordVisible ? "🙈" : "👁️"}
                            </button>
                        </div>
                        <button
                            className="bg-sky-700 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-6 text-gray-100 flex items-center gap-3">
                        <hr className="flex-grow border-gray-300" />
                        <p className="text-sm">OR</p>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <button
                        className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
                        onClick={handleGoogleSignup}
                    >
                        <svg
                            className="mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="25px"
                            aria-label="Google login icon"
                        >
                            <path
                                fill="#4285F4"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                        </svg>
                        Sign Up with Google
                    </button>

                    <div className="mt-10 text-sm flex justify-between items-center">
                        <p>Already have an account?</p>
                        <button
                            className="hover:border text-white bg-sky-700 hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
                            type="button"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className="md:block hidden w-1/2">
                    <img
                        className="rounded-2xl max-h-[1600px]"
                        src="https://i.pinimg.com/736x/fa/4e/e5/fa4ee5cfb18a9cc274f8338deaf3944e.jpg"
                        alt="Signup form illustration"
                    />
                </div>
            </div>
        </section>
    );
}
