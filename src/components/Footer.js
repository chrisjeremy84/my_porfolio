import React from 'react'

function Footer() {
    return (
        <div className=" flex flex-col items-center absolute bottom-0 bg-gradient-to-t from-gray-800 to-blue-900 w-screen">
            <div className=''>
            <ul className="flex flex-row space-x-3 p-3">
                <a className="text-lg font-semibold hover:text-gray-300 hover:translate-y-1 transition transform" href="/">Home</a>
                <a className="text-lg font-semibold hover:text-gray-300 hover:translate-y-1 transition transform" href="/project">Projects</a>
                <a className="text-lg font-semibold hover:text-gray-300 hover:translate-y-1 transition transform" href="/Skill">Skills</a>
            </ul>
            </div>
            <div className='p-3 text-white subpixel-antialiased font-medium'>
                <ul>
                    <li>chrisjeremy17@gmail.com</li>
                    <li>(+48)516991476</li>
                    <li>Bydgoszcz, Poland</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
