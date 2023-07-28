import { FiMoreHorizontal } from 'react-icons/fi';
import Image from './Image';

const AuthorInfo = () => {
   return (
      <div className="mb-6 flex w-full flex-grow flex-row items-center gap-5">
         <div className="default-animate flex flex-shrink select-none flex-row items-center gap-4 rounded-md hover:cursor-pointer hover:bg-gray-300/25 hover:p-2 hover:shadow-md">
            <div className="gradient h-16 w-16 overflow-hidden rounded-full p-[2px]">
               <Image
                  imageUrl="https://images.unsplash.com/photo-1568564321589-3e581d074f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Avartar author"
                  className="rounded-full border-2 border-white"
               />
            </div>
            <div className="flex flex-col">
               <span className="text-base font-semibold">Minh Thành</span>
               <address className="text-xs">Ho Chi Minh, Vietnam</address>
            </div>
         </div>

         <button className="default-animate ml-auto flex cursor-pointer items-center justify-center rounded-full bg-gray-300/50 px-2 shadow-md hover:bg-gray-300 hover:text-black/60">
            <FiMoreHorizontal
               size={25}
               className="relative flex-shrink flex-grow-0"
            />
         </button>
      </div>
   );
};

export default AuthorInfo;
