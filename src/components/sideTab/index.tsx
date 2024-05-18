import { NavLink } from "react-router-dom"

import { Button, Divider } from "@mantine/core";

const SideTab = () => {
  const accounts = [
    {
      name: "Account",
      link: "/account",
    },
    {
      name: "Stats & Analytics",
      link: "/statistics",
    },
    {
      name: "Account Options",
      link: "/account-option",
    },
    {
      name: "Account Verification",
      link: "/account-verification",
    },
    {
      name: "Transactions",
      link: "/transaction",
    },
    {
      name: "Payment",
      link: "/payment",
    },
    {
      name: "Referral",
      link: "/referral",
    },
    {
      name: "Chat Settings",
      link: "/chat-settings",
    },
  ];
  const streams = [
    {
      name: "Live Streams",
      link: "/live-streaming",
    },
    {
      name: "Template",
      link: "/live-streaming",
    },
    {
      name: "Static Stream Key",
      link: "/live-streaming",
    },
    {
      name: "Static Video URLs",
      link: "/live-streaming",
    },
    {
      name: "Live Streaming API",
      link: "/live-streaming",
    },
  ];
  const videos = [
    {
      name: "Auto Syndication",
      link: "/auto-syndication",
    },
    {
      name: "Peer-Per-View",
      link: "/peer-per-view",
    },
    {
      name: "Recurring Subs",
      link: "/recurring-subs",
    },
    {
      name: "All Videos",
      link: "/all-videos",
    },
    {
      name: "Schedule Videos",
      link: "/schedule-video",
    },
    {
      name: "Monetized Videos",
      link: "/monitized-video",
    },
    {
      name: "Policy Violations",
      link: "/policy-violation",
    },
  ];
  const channels = [
    {
      name: "Create Channel",
      link: "/create-channel",
    },
    {
      name: "My Channels",
      link: "/my-channel",
    },
    {
      name: "Emotes",
      link: "/emotes",
    },
    {
      name: "Followed Channel",
      link: "/followed-channel",
    },
  ];
  const modration = [
    {
      name: "Chat/Comment Muting",
      link: "/muted-user",
    },
    {
      name: "Moderators",
      link: "/modrators",
    },
    {
      name: "Blocked Words And Phrase",
      link: "/block-word-phrase",
    },
  ];
  const features = [
    {
      name: (
        <>
          <p>Pro Packages</p>
          <sup className="text-titan-red mt-3 ml-1">PRO</sup>
        </>
      ),
      link: "/",
    },
    {
      name: "Player Customization",
      link: "/",
    },
    {
      name: "Ad Integration",
      link: "/",
    },
    {
      name: "Data Usage",
      link: "/",
    },
    {
      name: "OTT and MRSS Feeds",
      link: "/",
    },
    {
      name: "Widgets & Scripts",
      link: "/",
    },
  ];

  return (
    <div className="px-5 space-y-2">
      <div className="border px-3 py-1 text-center text-xl bg-white dark:bg-rumble-dark dark:text-white dark:border-gray-600">
        Username
      </div>
      <div className="border text-cente text-sm bg-white dark:bg-rumble-dark dark:text-white dark:border-gray-600 space-y-3 capitalize">
        <div className="w-full">
          {accounts.map(({ name, link }, id) => (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "active bg-titan-blue px-2 w-[100%] flex py-2 text-white"
                  : "px-2 w-[100%] hover:text-titan-blue flex py-2"
              }
              key={id}>
              {name}
            </NavLink>
          ))}
        </div>
        <Divider />
        <div className="w-full">
          <h1 className="px-2 text-md text-titan-blue mb-1 font-bold">
            Live Streaming
          </h1>
          {streams.map(({ name, link }, id) => (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "active bg-titan-blue px-2 w-[100%] flex py-2 text-white"
                  : "px-2 w-[100%] hover:text-titan-blue flex py-2"
              }
              key={id}>
              {name}
            </NavLink>
          ))}
        </div>
        <Divider />
        <div className="w-full">
          <h1 className="px-2 text-md text-titan-blue mb-1 font-bold uppercase">
            Videos
          </h1>
          {videos.map(({ name, link }, id) => (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "active bg-titan-blue px-2 w-[100%] flex py-2 text-white"
                  : "px-2 w-[100%] hover:text-titan-blue flex py-2"
              }
              key={id}>
              {name}
            </NavLink>
          ))}
        </div>
        <Divider />
        <div className="w-full">
          <h1 className="px-2 text-md text-titan-blue mb-1 font-bold uppercase">
            Channels
          </h1>
          {channels.map(({ name, link }, id) => (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "active bg-titan-blue px-2 w-[100%] flex py-2 text-white"
                  : "px-2 w-[100%] hover:text-titan-blue flex py-2"
              }
              key={id}>
              {name}
            </NavLink>
          ))}
        </div>
        <Divider />
        <div className="w-full">
          <h1 className="px-2 text-md text-titan-blue mb-1 font-bold uppercase">
            Modration
          </h1>
          {modration.map(({ name, link }, id) => (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "active bg-titan-blue px-2 w-[100%] flex py-2 text-white"
                  : "px-2 w-[100%] hover:text-titan-blue flex py-2"
              }
              key={id}>
              {name}
            </NavLink>
          ))}
        </div>
        <Divider />
        <div className="w-full">
          <h1 className="px-2 text-md text-titan-blue mb-1 font-bold uppercase">
            Pro Features
          </h1>
          {features.map(({ name, link }, id) => (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "active bg-titan-blue px-2 w-[100%] flex py-2 text-white"
                  : "px-2 w-[100%] hover:text-titan-blue flex py-2"
              }
              key={id}>
              {name} 
            </NavLink>
          ))}
        </div>
        <Divider />
      </div>

      <Button
        className="!bg-titan-red dark:!bg-titan-red-dark !w-full"
        radius={0}>
        Sign Out
      </Button>
    </div>
  );
}

export default SideTab