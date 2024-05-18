import { createBrowserRouter } from "react-router-dom";

import Root from "./App";
import UserAccount from "./pages/accounmtModule/account";
import AccountVerification from "./pages/accounmtModule/accountVerification";
import ChatSettings from "./pages/accounmtModule/chatSettings";
import Payments from "./pages/accounmtModule/payment";
import Referral from "./pages/accounmtModule/referral";
import Statistics from "./pages/accounmtModule/statistics";
import Transaction from "./pages/accounmtModule/transaction";
import AccountOption from "./pages/accountOption";
import Browse from "./pages/browse";
import Category from "./pages/catgory";
import Emotes from "./pages/channelsModule/Emotes";
import CreateChannel from "./pages/channelsModule/createChannel";
import FollowedChannel from "./pages/channelsModule/followedChannel";
import MyChannel from "./pages/channelsModule/myChannel";
import EditorPicks from "./pages/editorPicks";
import Home from "./pages/home";
import Latest from "./pages/latest";
import Library from "./pages/library";
import LiveStreaming from "./pages/liveStreamingModule";
import BlockWordPhrase from "./pages/modrationModule/blockAndWordPhrase";
import ChatMuting from "./pages/modrationModule/chatMuting";
import Modrators from "./pages/modrationModule/modrators";
import Registration from "./pages/registration";
import SingleVideos from "./pages/singleVideo";
import Trending from "./pages/trending";
import UploadVideo from "./pages/uploadVideo";
import AllVideos from "./pages/videoModule/allVideos";
import MonitizedVideos from "./pages/videoModule/monitizedVideo";
import PeerPerView from "./pages/videoModule/perPerView";
import PolicyViolation from "./pages/videoModule/policyViolation";
import RecurringSubs from "./pages/videoModule/recurringSubs";
import ScheduleVidoes from "./pages/videoModule/scheduleVideo";
import Syndication from "./pages/videoModule/syndication";
import WatchHistory from "./pages/watchHistory";
import WahtchLater from "./pages/watchLater";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "editor-picks",
        element: <EditorPicks />,
      },
      {
        path: "Trending",
        element: <Trending />,
      },
      {
        path: "latest",
        element: <Latest />,
      },
      {
        path: "category/:id",
        element: <Category />,
      },
      {
        path: "single-video/:id",
        element: <SingleVideos />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "watch-later",
        element: <WahtchLater />,
      },
      {
        path: "watch-history",
        element: <WatchHistory />,
      },
      {
        path: "upload-video",
        element: <UploadVideo />,
      },
      {
        path: "account",
        element: <UserAccount />,
      },
      {
        path: "account-verification",
        element: <AccountVerification />,
      },
      {
        path: "account-option",
        element: <AccountOption />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "payment",
        element: <Payments />,
      },
      {
        path: "chat-settings",
        element: <ChatSettings />,
      },
      {
        path: "referral",
        element: <Referral />,
      },
      {
        path: "live-streaming",
        element: <LiveStreaming />,
      },
      {
        path: "create-channel",
        element: <CreateChannel />,
      },
      {
        path: "my-channel",
        element: <MyChannel />,
      },
      {
        path: "emotes",
        element: <Emotes />,
      },
      {
        path: "followed-channel",
        element: <FollowedChannel />,
      },
      {
        path: "muted-user",
        element: <ChatMuting />,
      },
      {
        path: "modrators",
        element: <Modrators />,
      },
      {
        path: "block-word-phrase",
        element: <BlockWordPhrase />,
      },  
      {
        path: "auto-syndication",
        element: <Syndication />,
      },
      {
        path: "peer-per-view",
        element: <PeerPerView />,
      },
      {
        path: "recurring-subs",
        element: <RecurringSubs />,
      },
      {
        path: "all-videos",
        element: <AllVideos />,
      },
      {
        path: "schedule-video",
        element: <ScheduleVidoes />,
      },
      {
        path: "monitized-video",
        element: <MonitizedVideos />,
      },
      {
        path: "policy-violation",
        element: <PolicyViolation />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
