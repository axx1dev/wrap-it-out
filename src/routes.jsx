import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  CloudIcon,
  VideoCameraIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  MapPinIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: WrenchScrewdriverIcon,
    name: "SERVICIOS",
    path: "/home",
    element: <Home />,
    id: "services"
  },
  {
    icon: UserCircleIcon,
    name: "NUESTRO EQUIPO",
    path: "/profile",
    element: <Profile />,
    id: "our-team"
  },
  {
    icon: ShieldCheckIcon,
    name: "MARCAS",
    path: "/sign-in",
    element: <SignIn />,
    id: "brands"
  },
  {
    icon: MapPinIcon,
    name: "CONTÁCTANOS",
    path: "/sign-up",
    element: <SignUp />,
    id: "contact-us"
  },
  {
    icon: VideoCameraIcon,
    name: "YOUTUBE",
    href: "https://www.youtube.com/@AxelPalacios",
    target: "_blank",
    element: "",
    id: "youtube"
  },
];

export default routes;
