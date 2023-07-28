import { twMerge } from 'tailwind-merge';

interface ImageProps {
   imageUrl: string;
   alt?: string;
   className?: string;
}

const Image: React.FC<ImageProps> = ({ imageUrl, alt, className }) => {
   return (
      <img
         loading="lazy"
         className={twMerge('h-full w-full object-cover', className)}
         decoding="async"
         src={imageUrl}
         alt={alt}
      />
   );
};

export default Image;
