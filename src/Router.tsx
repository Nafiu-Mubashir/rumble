import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Root from "./App";
import Registration from "./pages/registration";
import Category from "./pages/catgory";
import Browse from "./pages/browse";
import EditorPicks from "./pages/editorPicks";
import Trending from "./pages/trending";
import Latest from "./pages/latest";
import SingleVideos from "./pages/singleVideo";
import Library from "./pages/library";
import WahtchLater from "./pages/watchLater";
import WatchHistory from "./pages/watchHistory";
import UploadVideo from "./pages/uploadVideo";

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
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
