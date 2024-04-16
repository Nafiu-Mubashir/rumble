import { Tabs } from "@mantine/core";
import news from "../../assets/news.jpeg";
import VideoCard from "../../components/card/videoCard";

const Category = () => {
  return (
    <div>
      <div className="bg-white dark:bg-rumble-dark dark:text-white w-full p-4">
        <div className="w-full flex items-center gap-3">
          <img
            src={news}
            alt="news image"
            className="w-[5rem] h-[7.5rem] lg:w-[10rem] lg:h-[15rem] rounded-lg"
          />
          <div className="">
          <h4 className="font-[700] text-[.8rem] lg:text-[1.5rem]">News</h4>
          <p className="font-[600] text-[.8rem] lg:text-[1rem]">Your daily source of news from all over the world, all in one place!</p>
          <p className="text-[.8rem] lg:text-[0.813rem]">16.9k viewers</p>
          </div>
        </div>
      </div>
      <Tabs
        color="green"
        defaultValue="live Streams"
        classNames={{
          panel: "p-4",
          tabLabel: "font-[700] lg:text-[1.2rem] ",
          list: 'w-[100%] overflow-x-scroll dark:!bg-rumble-dark dark:!text-white',
          tab: 'hover:bg-rumble-dark'
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="live Streams">Live Streams</Tabs.Tab>
          <Tabs.Tab value="recoded Streams">Recoded Streams</Tabs.Tab>
          <Tabs.Tab value="videos">Videos</Tabs.Tab>
          <Tabs.Tab value="category">Category</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="live Streams">
            <VideoCard status="live" />
        </Tabs.Panel>

        <Tabs.Panel value="recoded Streams">
        <VideoCard />
        </Tabs.Panel>

        <Tabs.Panel value="videos">Videos tab content</Tabs.Panel>

        <Tabs.Panel value="category">Category tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Category;
