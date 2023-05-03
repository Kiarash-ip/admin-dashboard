import SpeedIcon from "@mui/icons-material/Speed";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BackpackIcon from "@mui/icons-material/Backpack";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BookIcon from "@mui/icons-material/Book";
import FolderIcon from "@mui/icons-material/Folder";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import ForumIcon from "@mui/icons-material/Forum";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

export const sidebar = [
  {
    id: 0,
    title: "general",
    items: [
      {
        id: 0,
        title: "App",
        icon: SpeedIcon,
      },
      {
        id: 1,
        title: "E-Commerce",
        icon: ShoppingBagIcon,
      },
      {
        id: 2,
        title: "Analytics",
        icon: EqualizerIcon,
      },
      {
        id: 3,
        title: "Banking",
        icon: AccountBalanceIcon,
      },
      {
        id: 4,
        title: "Booking",
        icon: BackpackIcon,
      },
      {
        id: 5,
        title: "File",
        icon: ArticleIcon,
      },
    ],
  },
  {
    id: 1,
    title: "management",
    items: [
      {
        id: 0,
        title: "User",
        icon: AccountBoxIcon,
      },
      {
        id: 1,
        title: "E-Commerce",
        icon: ShoppingCartIcon,
      },
      {
        id: 2,
        title: "Invoice",
        icon: ReceiptIcon,
      },
      {
        id: 3,
        title: "Blog",
        icon: BookIcon,
      },
      {
        id: 4,
        title: "File Manager",
        icon: FolderIcon,
      },
    ],
  },
  {
    id: 2,
    title: "App",
    items: [
      {
        id: 0,
        title: "Mail",
        icon: LocalPostOfficeIcon,
      },
      {
        id: 1,
        title: "Chat",
        icon: ForumIcon,
      },
      {
        id: 2,
        title: "Calender",
        icon: CalendarMonthIcon,
      },
      {
        id: 3,
        title: "Kanban",
        icon: ViewKanbanIcon,
      },
    ],
  },
];

export interface PieChart {
  name: string;
  value: number;
}

export const pieChartData: PieChart[] = [
  { name: "Mac", value: 400 },
  { name: "Windows", value: 300 },
  { name: "IOS", value: 300 },
  { name: "Android", value: 200 },
];

export const dashboardAppInvoices = [
  {
    id: 0,
    title: "Invoice ID",
  },
  {
    id: 1,
    title: "Category",
  },
  {
    id: 2,
    title: "Price",
  },
  {
    id: 3,
    title: "Status",
  },
  {
    id: 4,
    title: "",
  },
];

export const applicationListData = [
  {
    id: 0,
    title: "Chrome",
    avatar: "/images/chrome-icon.svg",
    platform: "Mac",
    cost: "Free",
    rate: 3.5,
    reviews: "34.93k",
  },
  {
    id: 1,
    title: "Drive",
    avatar: "/images/google-drive-icon.svg",
    platform: "Mac",
    cost: "35.71",
    rate: 2,
    reviews: "76.15k",
  },
  {
    id: 2,
    title: "Dropbox",
    avatar: "/images/dropbox-icon.svg",
    platform: "Windows",
    cost: "Free",
    rate: 5,
    reviews: "8.86k",
  },
  {
    id: 3,
    title: "Evernote",
    avatar: "/images/evernote-icon.svg",
    platform: "Mac",
    cost: "93.10",
    rate: 2,
    reviews: "27.33k",
  },
  {
    id: 4,
    title: "Github",
    avatar: "/images/github-icon.svg",
    platform: "Windows",
    cost: "Free",
    rate: 4,
    reviews: "85.01k",
  },
];

export const countriesInformation = [
  {
    id: 0,
    title: "Germany",
    src: "/images/germany-icon.svg",
    android: "19.68k",
    windows: "20.31k",
    mac: "20.31k",
  },
  {
    id: 1,
    title: "England",
    src: "/images/england-icon.svg",
    android: "19.68k",
    windows: "20.31k",
    mac: "20.31k",
  },
  {
    id: 2,
    title: "France",
    src: "/images/france-icon.svg",
    android: "19.68k",
    windows: "20.31k",
    mac: "20.31k",
  },
  {
    id: 3,
    title: "Korean",
    src: "/images/korean-icon.svg",
    android: "19.68k",
    windows: "20.31k",
    mac: "20.31k",
  },
  {
    id: 4,
    title: "USA",
    src: "/images/usa-icon.svg",
    android: "19.68k",
    windows: "20.31k",
    mac: "20.31k",
  },
];

export const authorsList = [
  {
    id: 0,
    avatar:
      "https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg",
    name: "Jayvion Simon",
    likes: "18.26k",
    cupColor: "rgb(118, 53, 220)",
    cupBgColor: "rgba(118, 53, 220, 0.08)",
  },
  {
    id: 1,
    avatar:
      "https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_2.jpg",
    name: "Lucian Obrien",
    likes: "17.34k",
    cupColor: "rgb(0, 184, 217)",
    cupBgColor: "rgba(0, 184, 217, 0.08)",
  },
  {
    id: 2,
    avatar:
      "https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_3.jpg",
    name: "Deja Brady",
    likes: "13.75k",
    cupColor: "rgb(255, 86, 48)",
    cupBgColor: "rgba(255, 86, 48, 0.08)",
  },
];
