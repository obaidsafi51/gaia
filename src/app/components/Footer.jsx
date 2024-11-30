import Link from "next/link";
import { FaMap } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { SiChatbot } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#2d5b97]/75 min-h-24 flex items-center px-8 py-2 justify-between fixed bottom-0  md:hidden">
        <Link href="">
          <ImPhone size={34} color="var(--success-color) " className="   hover:scale-110" />
        </Link>
        <Link href="">
          <SiChatbot size={34} color="var(--foreground) " className="   hover:scale-110" />
        </Link>
        <Link href="">
          <FaMap size={44} color="var(--foreground)" className=" hover:scale-110" />
        </Link>
      </div>
    </>
  );
};
export default Footer;
