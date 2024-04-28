import React, { useState } from 'react'
import { HomeIcon, ListBulletIcon, BookmarkIcon, Cog8ToothIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/16/solid'

const navItems = [
    { title: "Home", icon: <HomeIcon className="w-6 h-6" /> },
    { title: "Tasks", icon: <ListBulletIcon className="w-6 h-6" /> },
    { title: "Bookmarks", icon: <BookmarkIcon className="w-6 h-6" /> }
]

const Sidebar = () => {
    const [activeListItem, setActiveListItem] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const activateItem = (index) => {
        setActiveListItem(index);
    }

    const toggleExpand = () => {
        setExpanded(prevExpanded => !prevExpanded);
    }

    return (
        <div className={`fixed top-0 left-0 bottom-0 h-screen border-r border-border transition-all bg-secondary ${expanded ? "w-[250px]" : "w-auto"}`} style={{ zIndex: 90 }}>
            <div className="pt-[58px] h-full">
                <div className={`relative p-2 flex flex-col justify-between h-full ${expanded ? "items-start" : "items-center"}`}>
                    <ul className="flex flex-col gap-4 w-full">
                        {navItems.map((item, index) => (
                            <li
                                onClick={() => activateItem(index)}
                                className={`group relative flex items-center text-text text-sm gap-2 w-full p-2 rounded-md border cursor-pointer ${activeListItem === index ? "bg-primary border-border" : "bg-transparent border-secondary hover:bg-border"}`}
                                key={index}>
                                {item.icon}
                                {expanded && <p>{item.title}</p>}
                                {!expanded ?
                                    <span className="group-hover:block text-sm absolute ml-10 bg-border px-2 py-1 rounded-md hidden">{item.title}</span>
                                    : null
                                }
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2 w-full">
                        <button
                            onClick={toggleExpand}
                            className={`group flex gap-2 items-center relative w-full p-2 rounded-md border cursor-pointer ${activeListItem === navItems.length ? "bg-primary border-border" : "bg-transparent border-secondary hover:bg-border"}`}>
                            {expanded ? <ChevronDoubleLeftIcon className="w-6 h-6 text-text" /> : <ChevronDoubleRightIcon className="w-6 h-6 text-text" />}
                            {expanded ? <p className="text-text text-sm">Shrink</p> : <span className="hidden group-hover:block absolute ml-10 text-text bg-border px-2 py-1 text-sm rounded-md">Expand</span>}
                        </button>
                        <button
                            onClick={() => activateItem(navItems.length + 1)}
                            className={`group flex items-center gap-2 relative w-full p-2 rounded-md border cursor-pointer ${activeListItem === navItems.length + 1 ? "bg-primary border-border" : "bg-transparent border-secondary hover:bg-border"}`}>
                            <Cog8ToothIcon className="w-6 h-6 text-text" />
                            {expanded ? <p className="text-text text-sm">Settings</p> : <span className="hidden group-hover:block absolute ml-10 text-text bg-border px-2 py-1 text-sm rounded-md">Settings</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
