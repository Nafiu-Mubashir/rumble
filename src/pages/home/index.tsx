import React from "react";
import Button from "../../components/button";
import VideoCard from "../../components/card";

const Home = () => {
  return (
    <div>
      <span className="fixed bg-black top-14 w-full text-white z-5">
        Holla
      </span>
      <div className=" relative inline-block p-4 w-full">
        <div className="p-3">
          <div className="flex justify-between items-center mb-5">
            <h3>Category</h3>
            <Button
              value="View all"
              classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5 py-4 border-b">
              <VideoCard />

          </div>

          <div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
