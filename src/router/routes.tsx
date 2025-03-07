import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import RuleIcon from '@mui/icons-material/Rule';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import ArchiveIcon from '@mui/icons-material/Archive';

const routes = [
  {
    title: "Tasklar",
    icon: <CheckCircleOutlineIcon />,
    path: "/",
  },
  {
    title: "Lidlar",
    icon: <LibraryAddCheckIcon />,
    path: "/lidlar",
  },
  {
    title: "Yo'qlama",
    icon: <RuleIcon />,
    path: "/yo‘qlama",
  },
  {
    title: "O'quvchilar",
    icon: <PersonIcon />,
    path: "/o‘quvchilar",
  },
  {
    title: "Guruhlar",
    icon: <GroupsIcon />,
    path: "/guruhlar",
  },
  {
    title: "Ustozlar",
    icon: <img src="/public/images/teacher.png" width={20} height={20} />,
    path: "/ustozlar",
  },
  {
    title: "Arxiv",
    icon: <ArchiveIcon />,
    path: "/arxiv",
  },
];

export default routes
