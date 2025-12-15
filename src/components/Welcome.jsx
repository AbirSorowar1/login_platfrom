import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth).then(() => navigate("/login"));
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-96 text-center">
                <h1 className="text-3xl font-extrabold mb-6 text-purple-700">
                    Welcome Back!
                </h1>
                <p className="text-gray-700 mb-6">
                    You are logged in as <span className="font-semibold">{auth.currentUser?.email}</span>
                </p>
                <button
                    onClick={logout}
                    className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-purple-700 transition duration-300"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Welcome;
