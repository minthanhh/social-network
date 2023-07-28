import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface InteractionProps {
   socialMediaIcons: IconType;
   socialMediaEngagement: number;
   label: string;
   iconSize?: number;
   className?: string;
}

const Interaction: React.FC<InteractionProps> = ({
   socialMediaEngagement,
   socialMediaIcons: Icon,
   label,
   iconSize,
   className,
}) => {
   return (
      <div className={twMerge('flex w-2/6 items-center gap-2', className)}>
         <button>
            <Icon size={iconSize || 25} />
         </button>
         <p className="mt-auto flex items-center gap-1 text-sm font-semibold">
            <span>{socialMediaEngagement}</span>
            {label}
         </p>
      </div>
   );
};

export default Interaction;
