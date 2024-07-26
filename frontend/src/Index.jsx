import { Link } from "react-router-dom";

function Index() {

    return (
        <div className="h-screen w-full justify-center items-center flex bg-[#eee]">
            <div className='shadow-2xl min-h-[500px] w-[1000px] grid grid-cols-2 rounded-xl bg-white'>
                <div className="p-6 flex flex-col">
                    <form>
                        <h1 className='text-4xl font-bold text-center'>Welcome to Pag-Ibig</h1>
                        <h1 className='text-xl font-semibold mt-2 text-center'>Login As Admin to Access</h1>
                        <div className='flex flex-col mt-16'>
                            <label className='text-lg font-semibold'>Username</label>
                            <input type="text" required placeholder="Username" className='border-2 rounded-xl border-gray-300 p-2 w-3/4' />
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-lg font-semibold'>Password</label>
                            <input type="password" required placeholder="Password" className='border-2 rounded-xl border-gray-300 p-2 w-3/4' />
                        </div>
                        <div className='flex justify-center mt-12'>
                            <Link to='/members'>
                                <button className='bg-[#3564FD] text-white p-2 rounded-xl w-[250px]'>Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='left-side'>
                </div>
            </div>
        </div>
    )
}

export default Index;