'use client';

import { useCallback, useState } from "react"; 
import Input from "../Input"; // Ensure this path is correct

const Auth = () => {
    const [email, setEmail] = useState(""); // Removed extra space
    const [password, setPassword] = useState(""); // Removed extra space
    const [name, setName] = useState(""); // Removed extra space
    
    
    const[variant,setvariant ] = useState(' login ')
    
    const togglevariant = useCallback(() => {
        setvariant((currentvariant) =>currentvariant === 'login'? 'register':'login')
    } , []);

    return (
        <div className="relative h-screen w-full bg-[url('/images/logo.jpeg')] bg-cover bg-center">
            <nav className="px-12 py-5">
                <img src="/images/net.png" alt="net" className="h-20" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-10 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-lg w-full">
                    <h2 className="text-white text-3xl mb-8 font-semibold"> 
                        {variant === 'login'?'sign in ':'create an account'}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {variant === 'register' && (
                        <Input
                            label="Username"
                            onchange={(ev:any) => setName(ev.target.value)} // Fixed casing
                            id="name"
                            value={name} // Use state value
                          />
                      )}    
                        <Input
                            label="Email"
                            onchange={(ev:any) => setEmail(ev.target.value)} // Fixed casing
                            id="email"
                            value={email} // Use state value
                        />
                        <Input
                            label="Password"
                            onchange={(ev:any) => setPassword(ev.target.value)} // Fixed casing
                            id="password"
                            value={password} // Use state value
                        />
                    </div>
                    <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        {variant === 'login'?'login':'SIGN UP'}
                    </button>
                    <p className="text-neutral-500 mt-12"> 
                        { variant === 'login'? 'THIS IS A FIRST TIME FOR OTT?':'already have an account'} 
                    </p>
                    <span onClick={togglevariant} className="text-white ml-1 hover:underline cursor-pointer">
                        { variant === 'login'?'Create an account':'LOGIN '}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Auth;