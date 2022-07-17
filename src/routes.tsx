import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

const routes = [
    { path: `/`, element: <Home/> },
    { path: `/profile`, element: <Profile/> },
];
  export default routes;