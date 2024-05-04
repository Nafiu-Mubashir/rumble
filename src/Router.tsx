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
import EditorPicks from "./pages/editorPicks";
import Home from "./pages/home";
import Latest from "./pages/latest";
import Library from "./pages/library";
import LiveStreaming from "./pages/liveStreamingModule";
import Registration from "./pages/registration";
import SingleVideos from "./pages/singleVideo";
import Trending from "./pages/trending";
import UploadVideo from "./pages/uploadVideo";
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
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
