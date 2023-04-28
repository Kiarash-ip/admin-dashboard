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
