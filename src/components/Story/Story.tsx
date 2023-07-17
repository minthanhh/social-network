const Story = () => {
   return (
      <div className="flex flex-col items-center justify-center gap-1">
         <div className="flex h-[84px] w-[84px] items-center justify-center overflow-hidden rounded-full  bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <img
               className="h-[80px] w-[80px] rounded-full border-2 object-cover"
               src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
               alt=""
            />
         </div>

         <span className="text-base text-[#888888]">Yuumii</span>
      </div>
   );
};

export default Story;
