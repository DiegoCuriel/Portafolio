import React from 'react'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='md:col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur odio culpa!</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo animi eum consectetur dolor nostrum quod exercitationem perferendis quam, error, sint harum mollitia deserunt optio sunt magnam doloribus sapiente quia!</p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'> Checkout here</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src="https://i.pinimg.com/736x/c4/46/2a/c4462af306104c98e2e8088ea8e5ae7c.jpg" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default About