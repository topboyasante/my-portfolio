import EasySellImg from "../../public/images/easysell.png";
import RecipeDumpImg from "../../public/images/recipe-dump.png";

export const PROJECTS = [
  {
    id: 0,
    name: "EasySell",
    about: "Minimalist E-Commerce solution for small businesses.",
    href: "https://easysell.vercel.app/",
    stack: ["React", "NextJS", "Prisma"],
    img: EasySellImg,
  },
  {
    id: 1,
    name: "Recipe Dump",
    about: "Find and share everyday cooking inspiration on RecipeDump.",
    href: "https://recipe-dump.vercel.app/",
    stack: ["React", "NextJS", "Prisma", "Supabase", "PostgreSQL"],
    img: RecipeDumpImg,
  },
];
