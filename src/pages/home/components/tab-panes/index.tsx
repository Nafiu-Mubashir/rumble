import { useContext } from "react";
import { Link } from "react-router-dom";

import { Carousel } from "@mantine/carousel";

import { SlideContext } from "../../../../context/sidebarCtx";

const TabPane = () => {
  const { isOpen } = useContext(SlideContext);
  const tabPane = [
    {
      link: "-",
      name: 'All',
    },
    {
      link: "/",
      name: "Music",
    },
    {
      link: "/",
      name: "Entertaiment",
    },
    {
      link: "/",
      name: "Gaming",
    },
    {
      link: "/",
      name: "Live",
    },
    {
      link: "/",
      name: "finance",
    },
    {
      link: "/",
      name: "Innovations",
    },
    {
      link: "/",
      name: "Sciences",
    },
    {
      link: "/",
      name: "Comedy",
    },
    {
      link: "/",
      name: "vlogs",
    },
    {
      link: "/",
      name: "Sport",
    },
    {
      link: "/",
      name: "History",
    },
  ];
  return (
    <div>
      <Carousel
        withIndicators
        slideSize={{ base: "0%", sm: "0%", md: "0%" }}
        slideGap={{
          base: 0,
          sm: "sm",
          lg: "lg",
          md: "md",
          xl: "xl",
          xs: "xs",
        }}
        slidesToScroll={5}
        loop
        align="start"
        nextControlIcon={
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </>
        }
        previousControlIcon={
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </>
        }
        styles={{
          container: {},
          control: {},
          controls: {},
          indicator: {
            display: "none",
          },
        }}
        classNames={{
          container: "px-20 mt-3",
        }}
        className={
          isOpen
            ? "w-[86%] container h-[3.75rem] flex items-center bg-white dark:bg-rumble-dark"
            : "w-[50%] md:w-full lg:w-[98%] container h-[3.75rem] flex items-center bg-white dark:bg-rumble-dark"
        }>
        {tabPane.map(({ link, name }, id) => (
          <Carousel.Slide
            className="h-full"
            key={id}>
            <button
              className={`bg-gray-100 dark:bg-gray-700 relative w-auto py-2 px-5 flex justify-center rounded-md text-[0.7rem] font-normal hover:bg-gray-400 hover:text-white 
              
              `}
            >
              <Link to={link}>
                {name}
              </Link>
            </button>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default TabPane;
