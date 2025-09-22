import { Outlet } from 'react-router'
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import { NavItems, MobileSidebar } from 'components';


const NavbarLayout = () => {
  return (
    <div className='dashboard-layout'>
        <MobileSidebar />
        <aside className="w-full max-w-[270px] hidden lg:block">
            <SidebarComponent 
                width={270} 
                enableGestures={false}  
                className="!rounded-none !bg-[#5046e4] !text-white !shadow-none"
            >
                <NavItems />
            </SidebarComponent>
        </aside>
        
        <aside className="children">
            <Outlet />
        </aside>
    </div>
  )
}

export default NavbarLayout