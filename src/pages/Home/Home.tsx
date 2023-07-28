import HeadingAction from '@/components/HeadingAction/HeadingAction';
import Interaction from '@/components/Post/Interaction';
import Story from '@/components/Story/Story';
import { BsPlay } from 'react-icons/bs';
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import Image from '@/components/Post/Image';
import AuthorInfo from '@/components/Post/AuthorInfo';
import { Theme, Button } from 'react-daisyui'

const Home = () => {
   const stories = [
      {
         nickName: 'minhhthanh',
         avatar:
            'https://res.cloudinary.com/dgyk7uloc/image/upload/v1689756010/64b7a1663e373edb9fcfa24d.jpg',
      },
      {
         nickName: 'trungxinhgai',
         avatar:
            'https://res.cloudinary.com/dgyk7uloc/image/upload/v1689065442/64ad17e140e9b8d70c439b0b.jpg',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://res.cloudinary.com/dgyk7uloc/image/upload/v1688963237/64ab88a293b6979af7ef175c.jpg',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://res.cloudinary.com/dgyk7uloc/image/upload/v1688963237/64ab88a293b6979af7ef175c.jpg',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://res.cloudinary.com/dgyk7uloc/image/upload/v1688759120/64a86b4da5dd0cf5e88ceb64.jpg',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://res.cloudinary.com/dgyk7uloc/image/upload/v1688964154/64ab8c38e6b6fee983df6564.jpg',
      },
      {
         nickName: 'minhhthanh',
         avatar:
            'https://res.cloudinary.com/dgyk7uloc/image/upload/v1688963438/64ab896b45c55bd458bca663.jpg',
      },
   ];

   return (
      <div data-theme="luxury" className="flex-shrink-1 h-full w-3/5 flex-1 flex-col overflow-y-auto px-6">
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
            <div>
            <button className="btn btn-outline btn-info">Info</button>
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-outline btn-warning">Warning</button>
            <button className="btn btn-outline btn-error">Error</button>

            </div>
            <div className='p-8'>
                     <Theme dataTheme="dark">
               <Button color="primary">Click me, dark!</Button>
               </Theme>

               <Theme dataTheme="light">
               <Button color="secondary">Click me, light!</Button>
               </Theme>
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
