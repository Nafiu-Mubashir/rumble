import { createBrowserRouter } from "react-router-dom";

import Root from "./App";
import UserAccount from "./pages/account";
import AccountOption from "./pages/accountOption";
import AccountVerification from "./pages/accountVerification";
import Browse from "./pages/browse";
import Category from "./pages/catgory";
import ChatSettings from "./pages/chatSettings";
import EditorPicks from "./pages/editorPicks";
import Home from "./pages/home";
import Latest from "./pages/latest";
import Library from "./pages/library";
import Payments from "./pages/payment";
import Referral from "./pages/referral";
import Registration from "./pages/registration";
import SingleVideos from "./pages/singleVideo";
import Statistics from "./pages/statistics";
import Transaction from "./pages/transaction";
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
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
