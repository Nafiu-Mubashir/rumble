import Button from "../../components/button";
import CreatorCard from "../../components/card/creatorCard";
import CategoryCard from "../../components/card/categoryCard";
import VideoCard from "../../components/card/videoCard";

const Home = () => {
  return (
    <div>
      <div className="fixed bg-white top-[3.5rem] w-full h-[3.75rem] z-10 flex items-center gap-2 px-2">
        <Button
          value="Barstool"
          classes="bg-gray-100 text-[0.813rem] font-normal py-1 hover:bg-gray-400 hover:text-white"
        />
        <Button
          value="Picks"
          classes="bg-gray-100 text-[0.813rem] font-normal py-1 hover:bg-gray-400 hover:text-white"
        />
        <Button
          value="My Feed"
          classes="bg-gray-100 text-[0.813rem] font-normal py-1 hover:bg-gray-400 hover:text-white"
        />
      </div>
      <div className="relative inline-block p-4 w-full mt-10">
        <div className="p-3">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold">Barstool Sport</h3>
            <Button
              value="View all"
              classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5 py-4 border-b">
            <VideoCard />
          </div>

          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Top Live Categories</h3>
            <Button
              value="View all"
              classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
            />
          </div>
          <div className="mb-5 py-4 border-b">
            <CategoryCard />
          </div>

          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold">Picks</h3>
            <Button
              value="View all"
              classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5 py-4 border-b">
            <VideoCard status="live" />
          </div>

          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Recommended Creators</h3>
            <Button
              value="View all"
              classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
            />
          </div>
          <div className="mb-5 py-4 border-b">
            <CreatorCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
