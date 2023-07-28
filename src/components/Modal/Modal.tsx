import { twMerge } from 'tailwind-merge';
import { useAppSelector } from '@/hooks';
import { RootState } from '@/store';

interface ModalProps {
   children: React.ReactNode;
   className?: string;
   isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, className }) => {
   const { isOpen } = useAppSelector((state: RootState) => state.modal);

   return isOpen ? (
      <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/60">
         <div
            className={twMerge(
               'relative h-auto w-auto overflow-hidden rounded-lg bg-white p-4',
               className
            )}
         >
            {children}
         </div>
      </div>
   ) : null;
};

export default Modal;
