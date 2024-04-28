import React from 'react'
import { BoltIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'

const Navbar = () => {
    return (
        <div className="fixed h-[58px] top-0 left-0 right-0 bg-secondary border-b border-border flex" style={{ zIndex: 100 }}>
            <div className="h-full border-r border-border p-2">
                <button className="bg-border border border-border p-2 rounded-md"><BoltIcon className="w-6 h-6 text-text" /></button>
            </div>
            <div className="p-4 flex items-center justify-between flex-1">
                <form className="flex items-center bg-primary border border-border rounded-md p-2 w-[300px]">
                    <MagnifyingGlassIcon className="w-4 h-4 text-secondarytext" />
                    <input placeholder="Search..." className="bg-transparent w-full pl-2 focus:outline-none text-sm text-secondarytext" type="text" />
                </form>
                <button className="bg-primary ml-auto border border-border p-2 rounded-full"><UserCircleIcon className="w-6 h-6 text-text" /></button>
            </div>
        </div>
    )
}

export default Navbar