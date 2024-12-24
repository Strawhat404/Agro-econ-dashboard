import {useState} from 'react';
import {outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

import React from 'react'

const DashboardLayout = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
        <Sidebar open = {sidebarOpen} setOpen = {setSidebarOpen} />
        <div className="lg:pl-64">
            <Header setSidebarOpen = {setSidebarOpen} />
            <main className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <outlet />
                </div>
            </main>
        </div>
      
    </div>
  )
}

export default DashboardLayout
