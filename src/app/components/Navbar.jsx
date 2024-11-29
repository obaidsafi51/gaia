import { RiWechatLine } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { SiChatbot } from "react-icons/si";
import Link from "next/link";
import { FaMap } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full bg-[#2d5b97]/75 min-h-24 flex items-center px-8 py-2 justify-between fixed">
      <img src="/logo.png" alt="logo" className="h-16" />
      <div className="flex items-center space-x-8">
        <Link href="">
          <ImPhone size={34} color="var(--success-color) " className="hidden md:block  hover:scale-110" />
        </Link>
        <Link href="">
          <SiChatbot size={34} color="var(--foreground) " className="hidden md:block  hover:scale-110" />
        </Link>
        <Link href="">
          <RiWechatLine size={44} color="var(--foreground)" className=" hover:scale-110" />
        </Link>
        <Link href="">
          <FaMap size={44} color="var(--foreground)" className=" hover:scale-110 hidden md:block " />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
