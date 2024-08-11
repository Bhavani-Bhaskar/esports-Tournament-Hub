import React from 'react';
//hi everyone
const SignUp = () => {
    return (
    <div className="flex justify-center items-center min-h-screen bg-[#00111c]">
        <div className="w-full max-w-md bg-[#003356] text-white border-2 border-opacity-20 rounded-xl p-8 shadow-lg">
        <form>
            <h1 className="text-3xl text-center mb-8">Sign Up</h1>
            <div className="relative w-full h-12 mb-8">
            <input
                id="input1"
                type="text"
                placeholder="Username"
                aria-label="Username"
                className="w-full h-full bg-transparent border-none outline-none border-2 border-opacity-20 rounded-full text-white p-5 pr-14 placeholder-white"
            />
            <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>
            <div className="relative w-full h-12 mb-8">
            <input
                id="input1"
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full h-full bg-transparent border-none outline-none border-2 border-opacity-20 rounded-full text-white p-5 pr-14 placeholder-white"
            />
            <i className="bx bx-envelope absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>
            <div className="relative w-full h-12 mb-8">
            <input
                id="input1"
                type="password"
                placeholder="Password"
                aria-label="Password"
                className="w-full h-full bg-transparent border-none outline-none border-2 border-opacity-20 rounded-full text-white p-5 pr-14 placeholder-white"
            />
            <i className="bx bxs-lock absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>
            <div className="relative w-full h-12 mb-8">
            <input
                id="input1"
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                className="w-full h-full bg-transparent border-none outline-none border-2 border-opacity-20 rounded-full text-white p-5 pr-14 placeholder-white"
            />
            <i className="bx bxs-lock absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>
            <button
            type="submit"
            className="w-full h-12 bg-[#00406c] text-white rounded-full shadow-md text-lg font-semibold cursor-pointer"
            >
            Sign Up
            </button>
            <div className="text-center mt-6">
            <p className="text-sm">
                Already have an account? <a href="index.html" className="text-white font-semibold hover:underline">Login</a>
            </p>
            </div>
        </form>
        </div>
    </div>
    );
};

export default SignUp;
