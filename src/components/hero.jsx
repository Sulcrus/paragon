import Profilepic from "../assets/sky.jpg"

const hero = () =>{
    return (
    <div className='border-b border-neutral-900 pb:mb-35'>
         <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 '>
                <div className='flex flex-col items-center lg:items-center'>
                    <h1 className='pb-10 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl text-left'>
                        Sulcrus
                        </h1>
                    <span className='bg-gradient-to-r from-cyan-300 via-slate-300 to-blue-300 bg-clip-text text-2xl tracking-tighter text-transparent text-left'>
                        I m Full stack developer / Sys admin
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:py-8'>
                <div className='flex justify-center'>
                    <img src={Profilepic} alt="sky" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default hero
