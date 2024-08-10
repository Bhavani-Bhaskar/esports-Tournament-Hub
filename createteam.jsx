import React from 'react';

const RegisterForm = () => {
    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">Create Your Team</h1>
        <p className="text-center text-gray-600 mb-6">Challenge your competitors</p>

        <form action="#" method="POST">
            <div className="mb-6">
            <label htmlFor="team-name" className="block text-gray-700 font-medium mb-2">
                Team Name
            </label>
            <input
                type="text"
                id="team-name"
                name="team_name"
                placeholder="Enter your team name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            </div>

            <div className="mb-6">
            <label htmlFor="games" className="block text-gray-700 font-medium mb-2">
                Select Your Game
            </label>
            <select
                name="games"
                id="games"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
                <option value="" disabled selected>
                Select your game
                </option>
                <option value="Free FIRE">Free FIRE</option>
                <option value="BGMI">BGMI</option>
                <option value="Call Of Duty">Call Of Duty</option>
            </select>
            </div>

            <div className="text-center">
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Create Team
            </button>
            </div>
        </form>
        </div>
    </div>
    );
};

export default RegisterForm;
