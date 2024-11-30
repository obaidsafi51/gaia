import { RiWechatLine } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { SiChatbot } from "react-icons/si";
import Link from "next/link";
import { FaMap } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoExitOutline } from "react-icons/io5";
const Navbar = () => {
  const [user, setUser] = useState(null); // Use null for proper conditional rendering
  const router = useRouter();

  // Monitor Firebase Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state with the logged-in user or null
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("Token"); // Remove token from storage
      router.push("/auth/login"); // Redirect to login page
    } catch (error) {
      alert(`Error logging out: ${error.message}`);
    }
  };

  return (
    <div className="w-full bg-[#2d5b97]/75 min-h-24 flex items-center px-8 py-2 justify-between fixed">
      {/* Logo */}
      <img src="/logo.png" alt="logo" className="h-16" />

      {/* Navigation Links */}
      <div className="flex items-center md:space-x-8 space-x-6">
        <Link href="#">
          <ImPhone size={34} color="var(--success-color)" className="hidden md:block hover:scale-110" />
        </Link>
        <Link href="#">
          <SiChatbot size={34} color="var(--foreground)" className="hidden md:block hover:scale-110" />
        </Link>
        <Link href="#">
          <RiWechatLine size={44} color="var(--foreground)" className="hover:scale-110" />
        </Link>
        <Link href="#">
          <FaMap size={44} color="var(--foreground)" className="hidden md:block hover:scale-110" />
        </Link>

        {/* User Authentication Section */}
        {user ? (
          <div className="flex items-center space-x-4">
            <div className="  hidden lg:flex lg:flex-col lg:items-center">
              <h1 className=" font-medium">Welcome </h1>
              <h2>{user.displayName || user.email}</h2>
            </div>
            <button onClick={handleLogout} className="  px-4 py-2 ">
              <IoExitOutline size={44} color="var(--foreground)" className="hover:scale-110" />
            </button>
          </div>
        ) : (
          <h1 className=" font-medium">Please log in</h1>
        )}
      </div>
    </div>
  );
};

export default Navbar;
