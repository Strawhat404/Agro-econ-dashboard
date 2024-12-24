import React from 'react'
import {Link,useLocation} from 'react-router-dom';
import{
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    CloudIcon,
    NewspaperIcon,
    CogIcon,
    TruckIcon
} from '@heroicons/react/24/outline';

const navigation = [
    {name:'Dashboard',href:'/',icon:HomeIcon},
    {name:'Products',href:'/products',icon:ShoppingBagIcon},
    {name:'Users',href:'/users',icon:UserGroupIcon},
    {name:'Weather',href:'/weather',icon:CloudIcon},
    {name:'News',href:'/news',icon:NewspaperIcon},
    {name:'Logistics',href:'/logistics',icon:TruckIcon},
    {name:'Settings',href:'/settings',icon:CogIcon},
];

const Sidebar = ({open,setOpen}) => {
    const location = useLocation();
  return (
    <>
    <div className={`lg:hidden ${open ? 'block':'hidden' }`}>
        <div className=" fixed inset-0 z-40 flex">
            <div className=" relative flex w-64 flex-1 flex-col bg-gray-800">
                <SidebarContent />
            </div>
        </div>
    </div>
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <SidebarContent />
        </div>
    </div>
      
    </>
  )
}
export default Sidebar

function sidebarContent() {
    const location = useLocation();
    return (
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
                <h1 className="text-2xl font-bold text-white">Agriconnect</h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link key = {item.name} to = {item.href} className={`${
                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                            group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                                <item.icon className={`${
                                isActive ? 'text-gray-300' :
                                'text-gray-400 group-hover:text-gray-300' }
                                mr-3 flex-shrink-0 h-6 w-6`}
                                aria-hidden="true"/>
                                {item.name}
                            </Link>
                    )
                })}

            </nav>
        </div>
    )
}
