import Button from "../../components/button";
import CreatorCard from "../../components/card/creatorCard";
import CategoryCard from "../../components/card/categoryCard";
import VideoCard from "../../components/card/videoCard";
import { useContext } from "react";
import { SlideContext } from "../../context/sidebarCtx";
import { Divider } from "@mantine/core";
import TabPane from "./components/tab-panes";
import v1 from '../../assets/v1.png';
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import v5 from "../../assets/v5.png";
import v6 from "../../assets/v6.png";
import v7 from "../../assets/v7.png";
import v8 from "../../assets/v8.png";
import v9 from "../../assets/v9.png";
import video from "../../assets/video.png";


const Home = () => {
  const { isOpen } = useContext(SlideContext);
  return (
    <div className="container m-auto dark:text-white">
      <div className="fixed container bg-white dark:bg-rumble-dark top-[3.1rem] md:top-[3.5rem] lg:top-[3.5rem] w-full h-[3.75rem] z-10 flex items-center gap-2 px-2">
        <TabPane />
      </div>
      <div className="relative inline-block p-2 lg:p-4 w-full mt-10">
        <div className="lg:p-3 space-y-6">
          <div id="barstrool">
            <div className="flex justify-between items-center lg:mb-5">
              <h3 className="font-bold">Barstool Sport</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard videoLink={v1} />
              <VideoCard videoLink={v2} />
              <VideoCard videoLink={v3} />
              <VideoCard videoLink={v4} />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div id="categories">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Top Live Categories</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>
            <div
              className={`${isOpen} grid overflow-y-auto grid-cols-2 gap-3 lg:grid-cols-6`}>
              <CategoryCard />
              <CategoryCard />
              {/* <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard /> */}
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div id="picks">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Picks</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                status="live"
                videoLink={v6}
              />
              <VideoCard
                status="live"
                videoLink={v7}
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div id="creators">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Recommended Creators</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <CreatorCard />
              <CreatorCard />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="gaming">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Gaming</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                status="live"
                videoLink={v8}
              />
              <VideoCard
                status="live"
                videoLink={v9}
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="live">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Live</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                status="live"
                videoLink={v4}
              />
              <VideoCard
                status="live"
                videoLink={v1}
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="playlist">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Featured Playlist</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                category="playlist"
                videoLink={video}
              />
              <VideoCard
                category="playlist"
                videoLink={v6}
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="sports">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Sports</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard videoLink={v9} />
              <VideoCard videoLink={v8} />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="viral">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Viral</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard videoLink={video} />
              <VideoCard videoLink={v1} />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="powerSlap">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Power Slap</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={video}
                status="upcoming"
              />
              <VideoCard videoLink={video} />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="podcast">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Podcast</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={v3}
                status="live"
              />
              <VideoCard
                videoLink={v5}
                status="live"
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="finance">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Finance</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={v8}
                status="upcoming"
              />
              <VideoCard videoLink={video} />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="leaderboard">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Leaderboard</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={video}
                category="leaderboard"
              />
              <VideoCard
                videoLink={v5}
                category="leaderboard"
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="vlogs">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Vlogs</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard videoLink={v4} />
              <VideoCard
                videoLink={v2}
                status="upcoming"
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="news">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">News</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={v7}
                status="live"
              />
              <VideoCard
                videoLink={v3}
                status="live"
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="science">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Science</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={v9}
                status="upcoming"
              />
              <VideoCard videoLink={video} />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="music">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Music</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={v5}
                status="live"
              />
              <VideoCard
                videoLink={v2}
                status="upcoming"
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="entertainment">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Entertainment</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={v6}
                status="live"
              />
              <VideoCard
                videoLink={v4}
                status="upcoming"
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div
            className=""
            id="cooking">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Cooking</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard
                videoLink={v7}
                status="live"
              />
              <VideoCard
                videoLink={video}
                status="upcoming"
              />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />
        </div>
      </div>
    </div>
  );
};

export default Home;
