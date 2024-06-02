import aboutimg from '../assets/about.jpg'

const about = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
            About 
        <span className="text-neutral-500">
             Me
        </span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-8"> 
            <div className="flex items-center justify-center"> </div>
            <img className='rounded-2xl' src={aboutimg} alt="Aboutimg" />
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
      </div>
      
    );
};

export default about
