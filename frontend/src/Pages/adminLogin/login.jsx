import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/dashboard');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form 
                className="bg-white shadow-md rounded-lg p-8 space-y-6 max-w-sm w-full"
                onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
            >
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Login</h2>
                <p className="text-sm text-gray-500 text-center">
                    Enter your email below to login to your account
                </p>
                
                <div className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="px-4 py-3 w-full border border-gray-300 rounded-lg text-gray-700 text-sm focus:ring focus:ring-green-300 outline-none"
                    />

                    <input 
                        type="password" 
                        placeholder="Password"
                        className="px-4 py-3 w-full border border-gray-300 rounded-lg text-gray-700 text-sm focus:ring focus:ring-green-300 outline-none"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input 
                        type="checkbox" 
                        id="remember" 
                        className="w-4 h-4 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-500">
                        Remember me
                    </label>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium text-sm transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
