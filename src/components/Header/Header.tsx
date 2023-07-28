import {
   HeartIcon,
   Image,
   Logo,
   MicIcon,
   NotifyIcon,
   PlusIcon,
   SearchIcon,
   SendIcon,
} from '@/assets';
import Action from '../Action/Action';
import { onOpen } from '@/store/slices/modalSlice';
import { useAppDispatch } from '@/hooks';

const Header = () => {
   const dispatch = useAppDispatch();
   const actions = [
      {
         icon: HeartIcon,
         notify: false,
      },
      {
         icon: NotifyIcon,
         notify: false,
      },
      {
         icon: SendIcon,
         notify: true,
      },
   ];

   return (
      <div className="relative z-10 flex w-full items-center justify-between px-6 py-[15px] shadow-md">
         <img src={Logo} alt="" />

         <div className="ml-auto mr-[5px] flex items-center gap-[5px] md:m-0 xl:gap-[120px]">
            {/* Search */}
            <div className="relative hidden overflow-hidden rounded-full border border-[#777777] sm:w-[200px] md:flex md:w-[250px] lg:w-[500px]">
               <input
                  type="text"
                  className="w-ful h-full flex-1 rounded-[25px] border-none p-[6px] pl-8 outline-none md:pl-10 lg:pl-[75px]"
                  placeholder="search explore..."
               />

               <div className="absolute left-[6px] top-2/4 -translate-y-2/4">
                  <img src={SearchIcon} alt="" />
               </div>
               <div className="absolute right-[6px] top-2/4 -translate-y-2/4">
                  <img src={MicIcon} alt="" />
               </div>
            </div>

            <div className="ml-auto h-[40px] w-[40px] xl:w-auto">
               <button
                  id="gradient"
                  onClick={() => dispatch(onOpen())}
                  className="relative flex h-full w-full items-center gap-[5px] rounded-[25px] px-5 py-[6px] text-white"
               >
                  <img
                     className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 xl:relative xl:left-0 xl:top-0 xl:translate-x-0 xl:translate-y-0"
                     src={PlusIcon}
                     alt=""
                  />
                  <span className="hidden xl:block">create new post</span>
               </button>
            </div>
         </div>

         <div className="flex items-center gap-[5px]">
            <div className="hidden items-center gap-[5px] lg:flex">
               {actions.map((action, index) => (
                  <Action
                     key={index}
                     icon={action.icon}
                     notify={action.notify}
                  />
               ))}
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-[#dfdfdf] shadow-sm backdrop-blur-sm">
               <img className="h-full w-full object-cover" src={Image} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Header;
