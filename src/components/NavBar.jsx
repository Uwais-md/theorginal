import LogoText from './LogoText'
export default function NavBar() {
    return(
        <header className=' mx-5 sm:max-w-md pl-10 lg:max-w-lg flex justify-center mt-20 sm:mt-28 sm:mx-auto'>
            {/* <LogoText /> */}
            <div className=' flex flex-col gap-5 '>
            <div className=' flex flex-col gap-3'>
                <p className=' lowercase font-medium text-2xl'>Our Tech Stack</p>
                <p className=' text-xl opacity-45 font-medium'>we nail what we work on with these tools & frameworks</p>
            </div>

            <div className=' flex gap-3'>
                <button className='sm:px-5 px-3 py-2 bg-black text-white text-sm rounded-full'>book a call</button>
                <button className='sm:px-5 px-3 py-2 bg-white text-sm rounded-full'>email</button>
                <button className='sm:px-5 px-3 py-2 bg-white text-sm rounded-full'>follow</button>
            </div>
            </div>
        </header>
    )
}