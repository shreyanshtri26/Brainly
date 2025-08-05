import { Button } from "./Button";
import { Input } from "./InputPlaceholder";
import { useState } from 'react';

export function Signin() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Brainly
                    </h2>
                    <h3 className="mt-2 text-2xl font-medium text-gray-700">
                        Sign in to your account
                    </h3>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <Input 
                                name="username"
                                placeholder="Username" 
                                onChange={handleChange} 
                                value={formData.username}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div>
                            <Input 
                                name="password"
                                type="password"
                                placeholder="Password" 
                                onChange={handleChange} 
                                value={formData.password}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Don't have an account? Sign up
                            </a>
                        </div>
                    </div>

                    <div>
                        <Button 
                            varient="primary" 
                            text="Sign in" 
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}