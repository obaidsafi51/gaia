import { RiWechatLine } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { SiChatbot } from "react-icons/si";
import Link from "next/link";
import { FaMap } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
const Navbar = () => {
  const[user,setUser] = useState("")
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // currentUser contains user data or null if logged out
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  
  return (
    <div className="w-full bg-[#2d5b97]/75 min-h-24 flex items-center px-8 py-2 justify-between fixed">
      <img src="/logo.png" alt="logo" className="h-16" />
      {user ? (
        <h1 className="ml-20">Welcome, {user.displayName || user.email}</h1>
      ) : (
        <h1>Please log in</h1>
      )}
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
