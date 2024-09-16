import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/">
            <h1 className='font-medium mx-3'>Vox
                <span style={{ backgroundColor: '#ff5733', color: 'white' }} className='font-bold rounded-md px-1 py-0 inline-block ml-0.25'>Fox</span>
            </h1>
            </a>
            <div className='gap-4 flex items-center '>
                <a href="/" className='bg-gray-100 flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-orange-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
