import Input  from "../Input";

const Auth = () => (
    <div className="relative h-screen w-full bg-[url('/images/logo.jpeg')] bg-cover bg-center">
        
            <nav className="px-12 py-5">
                <img src="/images/net.png" alt="net" className="h-20" />
            </nav>
        <div className="flex justify-center">
        <div className="bg-black bg-opacity-60 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-lg w-full">
               <h2 className="text-white text-3xl mb-8 font-semibold"> 
                sign in 
               </h2>
               <div className="flex flex-col gap-4">
                 <Input  />
               </div>
            </div>
        </div>
    </div>
);

export default Auth;