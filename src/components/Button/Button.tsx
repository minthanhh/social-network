interface ButtonProps {
   disabled?: boolean;
   label: string;
   outline?: boolean;
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
   label,
   disabled,
   onClick,
   outline,
}) => {
   return (
      <div className="min-w-min">
         <button
            onClick={onClick}
            className="gradient hover:gradient-2 w-full rounded-md border-none px-10 py-2 text-white transition-all duration-200 ease-linear"
         >
            {label}
         </button>
      </div>
   );
};

export default Button;
