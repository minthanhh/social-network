import { IconType } from 'react-icons';

interface MediaSectionProps {
   mediaIcon: IconType;
   tooltip?: string;
}

const MediaSection: React.FC<MediaSectionProps> = ({
   mediaIcon: Icon,
   tooltip,
}) => {
   return (
      <div className="default-animate cursor-pointer rounded-full p-1 hover:bg-gray-300/50">
         <Icon size={22} />
      </div>
   );
};

export default MediaSection;
