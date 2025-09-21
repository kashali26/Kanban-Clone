import React from 'react'
import { Outlet } from 'react-router'

const NavbarLayout = () => {
  return (
    <div className='dashboard-layout'>
        MobileSideBar
        <aside className="w-full max-w-[270px] hidden lg:block">
            sidebar
        </aside>
        <aside className="children">
            <Outlet />
        </aside>
    </div>
  )
}

export default NavbarLayout