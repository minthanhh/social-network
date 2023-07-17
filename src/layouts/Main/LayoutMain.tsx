import { Sidebar, Header } from '@/components';
import { Outlet } from 'react-router-dom';

const LayoutMain = () => {
   return (
      <div className="h-full w-full">
         <Header />

         <main className="flex h-[calc(100%_-_70px)] items-start bg-[#f5f5f5]">
            <Sidebar />
            <Outlet />
            <Sidebar />
         </main>
      </div>
   );
};

export default LayoutMain;
