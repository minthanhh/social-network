import HeadingAction from '@/components/HeadingAction/HeadingAction';
import Interaction from '@/components/Post/Interaction';
import Story from '@/components/Story/Story';
import { BsPlay } from 'react-icons/bs';
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import Image from '@/components/Post/Image';
import AuthorInfo from '@/components/Post/AuthorInfo';

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
      <div className="flex-shrink-1 h-full w-3/5 flex-1 flex-col overflow-y-auto px-6">
         <div className="mx-auto w-4/5 min-w-0">
            <div className="mt-10 flex items-center justify-between">
               <h3 className="mb-4 text-2xl font-black text-black">Stories</h3>
               <button className="flex items-center gap-2 text-lg font-bold">
                  Watch all
                  <BsPlay size={30} />
               </button>
            </div>
            <div className="flex w-full items-center justify-center gap-5">
               {stories.map((story, idx) => (
                  <Story
                     key={story.nickName + idx}
                     avatar={story.avatar}
                     nickName={story.nickName}
                  />
               ))}
            </div>
            <div className="mt-10 flex flex-col">
               <HeadingAction label="Feeds">
                  <div className="flex items-center gap-2">
                     <button className="default-animate w-max rounded-full bg-gray-300/50 px-4 py-2 shadow-md hover:bg-gray-300">
                        Latest
                     </button>
                     <button className="default-animate gradient w-max rounded-full px-5 py-2 text-white shadow-md">
                        Popular
                     </button>
                  </div>
               </HeadingAction>

               <div className="mb-10 h-auto w-full overflow-hidden rounded-lg bg-white pt-4 shadow-md">
                  <div className="px-4">
                     <AuthorInfo />

                     <div className="mb-6 h-auto w-full overflow-hidden rounded-lg shadow-md">
                        <Image
                           imageUrl="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1234&q=80"
                           alt="Post 1"
                        />
                     </div>
                  </div>

                  <div className="mb-auto flex w-full items-center justify-between border-t border-gray-300 bg-gray-300/40 px-4 py-4 pt-2 shadow-md">
                     <Interaction
                        label="Like"
                        socialMediaIcons={AiOutlineLike}
                        socialMediaEngagement={280}
                     />

                     <Interaction
                        label="Comment"
                        socialMediaIcons={FaRegCommentDots}
                        socialMediaEngagement={88}
                        className="justify-center"
                     />

                     <Interaction
                        label="Share"
                        socialMediaIcons={AiOutlineShareAlt}
                        socialMediaEngagement={8}
                        iconSize={30}
                        className="justify-end"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
