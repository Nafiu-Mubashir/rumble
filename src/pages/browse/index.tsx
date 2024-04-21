import gaming from '../../assets/browse-gaming.svg';
import viral from '../../assets/browse-viral.svg';
import music from '../../assets/browse-music.svg';
import news from '../../assets/browse-news.svg';
import { Tabs } from '@mantine/core';
import VideoCard from '../../components/card/videoCard';
import CategoryCard from '../../components/card/categoryCard';

const Browse = () => {
  return (
    <div className="">
      <div className="dark:bg-rumble-dark p-4 dark:text-white">
        <h1 className="font-[700] text-[2.5rem] mb-6">Browse</h1>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 md:gap-5">
          <div className="border-2 rounded-lg p-3 w-full relative border-[#9D91FF]">
            <a href="/category/id" className="capitalize font-bold">
              Gaming
            </a>
            <img src={gaming} className='absolute h-[80px] top-[-18px] right-2' />
          </div>
          <div className="border-2 rounded-lg p-3 w-full relative border-[#82B1FF]">
            <a href="/category/id" className="capitalize font-bold">
              viral
            </a>
            <img src={viral} className='absolute h-[80px] top-[-18px] right-2' />
          </div>
          <div className="border-2 rounded-lg p-3 w-full relative border-[#67EAFF]">
            <a href="/category/id" className="capitalize font-bold">
              music
            </a>
            <img src={music} className='absolute h-[80px] top-[-18px] right-2' />
          </div>
          <div className="border-2 rounded-lg p-3 w-full relative border-[#7DD4FF]">
            <a href="/category/id" className="capitalize font-bold">
              news
            </a>
            <img src={news} className='absolute h-[80px] top-[-18px] right-2' />
          </div>
        </div>
      </div>
      <Tabs
        color="green"
        defaultValue="categories"
        classNames={{
          panel: "p-4",
          tabLabel: "font-[700] lg:text-[1.2rem] ",
          list: 'w-[100%] overflow-x-scroll lg:overflow-hidden dark:!bg-rumble-dark dark:!text-white',
          tab: 'hover:bg-gray-200 dark:hover:bg-rumble-dark'
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="categories">categories</Tabs.Tab>
          <Tabs.Tab value="live Streams">Live Streams</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="categories" className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 dark:text-white'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </Tabs.Panel>
        <Tabs.Panel value="live Streams" className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
            <VideoCard status="live" />
            <VideoCard status="live" />
            <VideoCard status="live" />
            <VideoCard status="live" />
            <VideoCard status="live" />
            <VideoCard status="live" />
            <VideoCard status="live" />
            <VideoCard status="live" />
        </Tabs.Panel>

      </Tabs>
    </div>
  );
};

export default Browse;
