interface HeadingActionProps {
   label: string;
   children: React.ReactNode;
}

const HeadingAction: React.FC<HeadingActionProps> = ({ children, label }) => {
   return (
      <div className="mb-5 flex items-center justify-between">
         <h2 className="text-2xl font-bold leading-5">{label}</h2>
         {children}
      </div>
   );
};

export default HeadingAction;
