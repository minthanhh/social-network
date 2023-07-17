import {
   CommunityIcon,
   ExploreIcon,
   FavoritesIcon,
   AvatarImage,
   HomeIcon,
   TvIcon,
} from '@/assets';
import Navbar from '../Navbar/Navbar';

const Sidebar = () => {
   const routes = [
      {
         icon: HomeIcon,
         label: 'Feed',
         path: '/',
      },
      {
         icon: ExploreIcon,
         label: 'Explore',
         path: '/explore',
      },
      {
         icon: TvIcon,
         label: 'Top Tv',
         path: '/top-tv',
      },
      {
         icon: FavoritesIcon,
         label: 'My favorites',
         path: '/my-favorites',
      },
      {
         icon: CommunityIcon,
         label: 'Community',
         path: '/community',
      },
   ];

   return (
      <div className="h-full w-[20%] bg-white shadow-md">
         <div className="mt-[30px] flex flex-col justify-center gap-[10px] border-b border-[#999999] px-[15px] pb-[10px] text-center">
            <div className="flex flex-col items-center gap-1">
               <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                  <img
                     className="h-[95px] w-[95px] rounded-full border-[2px] border-white object-cover"
                     src={AvatarImage}
                     alt=""
                  />
               </div>
               <h3 className="text-base font-bold">Minh Thành</h3>
               <span className="font-normal">Developer</span>
            </div>
            <div className="flex items-center justify-center gap-5">
               <div className="flex flex-col">
                  <span className="font-bold">623</span>
                  <span className="text-xs font-normal uppercase">POSTS</span>
               </div>
               <div className="flex flex-col">
                  <span className="font-bold">775.2K</span>
                  <span className="text-xs font-normal uppercase">
                     FOLLOWER
                  </span>
               </div>
               <div className="flex flex-col">
                  <span className="font-bold">88</span>
                  <span className="text-xs font-normal uppercase">
                     FOLLOWING
                  </span>
               </div>
            </div>
         </div>

         <div className="mt-[30px] flex flex-col border-b border-[#999999] pb-[30px]">
            {routes.map((route, i) => (
               <Navbar
                  key={route.label + i}
                  label={route.label}
                  path={route.path}
                  icon={route.icon}
               />
            ))}
         </div>

         <div></div>
      </div>
   );
};

export default Sidebar;
