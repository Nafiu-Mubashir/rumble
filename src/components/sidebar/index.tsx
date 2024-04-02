// components/Sidebar.tsx
// import { motion } from 'framer-motion';
// import ThemeSwitcher from '../themeSwitcher';
import { Award, Diagram, FolderOpen, Home, Timer1 } from 'iconsax-react';

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

const NavLink = [
    {
      icon: <Home size="20" color="" className="stroke-black block mx-auto"/>,
      name: 'home',
    },
    {
      icon: <FolderOpen size="20" color="" className="stroke-black block mx-auto"/>,
      name: 'browse',
    },
    {
      icon: <Award size="20" color="" className="stroke-black block mx-auto"/>,
      name: 'editor picks',
    },
    {
      icon: <Diagram size="20" color="" className="stroke-black block mx-auto"/>,
      name: 'trending',
    },
    {
      icon: <Timer1 size="20" color="" className="stroke-black block mx-auto"/>,
      name: 'latest',
    },
  ]
  
  const Sidebar = ({isOpen}:{ isOpen: boolean}) => {
    return (
      <>
      <aside className={`${isOpen ? 'w-[250px]' : 'w-[100px]'} z-10 lg:z-0 main-side bg-white border border-gray-300 text-black h-screen overflow-y-scroll`}>
        <div className='p-3 mt-20 m-auto space-y-4'>
            <div className="flex flex-col gap-4 items-center">
            {
              NavLink.map(({icon, name}, id) => (
                <div key={id} className={`${isOpen ? 'flex-row' : 'flex-col'} flex`}>
                  {icon}
                  <p className='capitalize text-center text-[0.8rem]'>{name}</p>
                </div>
              ))
            }
            </div>

            <div>
              <h4 className='text-[0.8rem] text-center'>Featured</h4>
              
            </div>
        </div>
    </aside>
    </>
  );
};

export default Sidebar;
