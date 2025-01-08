import React from 'react';
import '../../index.css';

const Login = () => {
    return (
        <form className="space-y-4 font-[sans-serif] max-w-md mx-auto">
            <input 
                type="email" 
                placeholder="Enter Email"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded" 
            />

            <input 
                type="password" 
                placeholder="Enter Password"
                className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded" 
            />

            <div className="flex">
                <input type="checkbox" className="w-4" />
                <label className="text-sm ml-4">Remember me</label>
            </div>

            <button 
                type="button"
                className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default Login;
