import Image from '../Post/Image';
import Modal from './Modal';
import { MdOutlineClose } from 'react-icons/md';
import AdditonalContent from '../Post/AdditonalContent';
import { useAppDispatch } from '@/hooks';
import { useCallback } from 'react';
import { onClose } from '@/store/slices/modalSlice';

const PostModal = () => {
   const dispatch = useAppDispatch();

   const handleCloseModal = useCallback(() => {
      dispatch(onClose());
   }, [dispatch]);

   return (
      <Modal className="w-[500px]">
         <h2 className="border-b py-3 text-center text-xl font-bold">
            Tạo bài viết
         </h2>
         <div
            className="absolute right-5 top-5 cursor-pointer rounded-full bg-gray-300/50 p-1 text-black/70"
            onClick={handleCloseModal}
         >
            <MdOutlineClose size={30} />
         </div>

         <div className="flex flex-col gap-4">
            <div className="default-animate flex flex-shrink select-none flex-row items-center gap-4 rounded-md hover:cursor-pointer">
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

            <textarea
               className="h-auto w-full appearance-none p-3 outline-none"
               placeholder="bạn đang nghĩ gì thế?"
            ></textarea>

            <AdditonalContent />

            <div>
               <button className="gradient w-full rounded-lg py-2 text-base text-white">
                  Đăng
               </button>
            </div>
         </div>
      </Modal>
   );
};

export default PostModal;
