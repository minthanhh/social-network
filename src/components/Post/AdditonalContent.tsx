import MediaSection from './MediaSection';

import { FaUserTag } from 'react-icons/fa';
import { HiOutlineGif } from 'react-icons/hi2';
import { BiSolidMap, BiImageAdd } from 'react-icons/bi';

const AdditonalContent = () => {
   const multiMedia = [
      {
         mediaIcon: BiImageAdd,
      },
      {
         mediaIcon: FaUserTag,
      },
      {
         mediaIcon: BiSolidMap,
      },
      {
         mediaIcon: HiOutlineGif,
      },
   ];

   return (
      <div className="flex cursor-pointer select-none items-center justify-between rounded-lg border border-gray-300/50 p-3">
         <p>Thêm vào bài viết của bạn</p>

         <div className="flex items-center gap-2">
            {multiMedia.map((media, idx) => (
               <MediaSection
                  key={media.mediaIcon + idx}
                  mediaIcon={media.mediaIcon}
               />
            ))}
         </div>
      </div>
   );
};

export default AdditonalContent;
