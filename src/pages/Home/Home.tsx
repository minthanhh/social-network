import Story from '@/components/Story/Story';

const Home = () => {
   const stories = [
      {
         nickName: 'minhhthanh',
         avatar:
            'https://scontent.cdninstagram.com/v/t51.2885-19/300622229_598549055189336_4441115838058321556_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=L38RmGf5FzsAX9hBmDA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCo1ZeH-LsqWUDaoqDNt4Hs_M3kgoLGgpsTHdVmn0-P-Q&oe=64B7BE89&_nc_sid=10d13b',
      },
      {
         nickName: 'trungxinhgai',
         avatar:
            'https://scontent.cdninstagram.com/v/t51.2885-19/300622229_598549055189336_4441115838058321556_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=L38RmGf5FzsAX9hBmDA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCo1ZeH-LsqWUDaoqDNt4Hs_M3kgoLGgpsTHdVmn0-P-Q&oe=64B7BE89&_nc_sid=10d13b',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://scontent.cdninstagram.com/v/t51.2885-19/300622229_598549055189336_4441115838058321556_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=L38RmGf5FzsAX9hBmDA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCo1ZeH-LsqWUDaoqDNt4Hs_M3kgoLGgpsTHdVmn0-P-Q&oe=64B7BE89&_nc_sid=10d13b',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://scontent.cdninstagram.com/v/t51.2885-19/300622229_598549055189336_4441115838058321556_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=L38RmGf5FzsAX9hBmDA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCo1ZeH-LsqWUDaoqDNt4Hs_M3kgoLGgpsTHdVmn0-P-Q&oe=64B7BE89&_nc_sid=10d13b',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://scontent.cdninstagram.com/v/t51.2885-19/300622229_598549055189336_4441115838058321556_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=L38RmGf5FzsAX9hBmDA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCo1ZeH-LsqWUDaoqDNt4Hs_M3kgoLGgpsTHdVmn0-P-Q&oe=64B7BE89&_nc_sid=10d13b',
      },
   ];

   return (
      <div className="w-full flex-1 px-6">
         <div className="my-10">
            <h3 className="mb-4 text-2xl font-black text-black">Stories</h3>
            <div className="flex items-center gap-5">
               <Story />
               <Story />
               <Story />
               <Story />
               <Story />
               <Story />
               <Story />
            </div>
         </div>
      </div>
   );
};

export default Home;
