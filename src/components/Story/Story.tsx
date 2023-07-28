import { useRef, useState, useEffect } from 'react';

interface StoryProps {
   avatar: string;
   nickName: string;
}

const Story: React.FC<StoryProps> = ({ avatar, nickName }) => {
   const [height, setHeight] = useState(0);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      handleResize();
   }, []);

   const handleResize = () => {
      if (ref.current) {
         const currentHeight = ref.current.offsetWidth;
         setHeight(currentHeight);
      }

      window.addEventListener('resize', handleResize);

      if (ref.current) {
         const initialWidth = ref.current.offsetWidth;
         setHeight(initialWidth);
      }

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   };

   return (
      <div className="flex w-[calc(100%_/_7)] min-w-0 flex-col items-center justify-center gap-1">
         <div
            ref={ref}
            className={`w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-[2px] h-[${height}px]`}
         >
            <img
               className="h-full w-full rounded-full border-2 object-cover"
               src={avatar}
               alt=""
            />
         </div>

         <span className="text-sm text-[#888888]">{nickName}</span>
      </div>
   );
};

export default Story;
