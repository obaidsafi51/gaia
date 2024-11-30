"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      if (typeof window !== "undefined") {
        localStorage.setItem("Token", userCredential.user.accessToken);
      }

      router.push("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password. Please try again.");
          break;
        case "auth/user-not-found":
          alert("No user found with this email.");
          break;
        default:
          alert("Error signing in: " + error.message);
      }
    }
  };

  return (
    <div className="outer h-[100%] w-full inset-0 fixed flex items-center justify-center bg-[var(--background)]">
      <div className="">
        <form onSubmit={signIn} className="flex flex-col items-center ">
          <img src="/logo.png" alt="logo" className="h-24 w-24 mb-16" />
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full  rounded px-3 py-2 bg-[#ffe0b2]/25"
              value={data.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full  rounded px-3 py-2 bg-[#ffe0b2]/25"
              value={data.password}
              onChange={handleChange}
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-[var(--background)] uppercase text-lg py-2 rounded hover:saturate-150 hover:shadow-lg mt-8 mb-5"
          >
            LOGIN
          </button>
          <div className="flex items-start mb-5">
            <label className="ms-2 text-sm font-medium text-[#293133]/75">
              Forgot password?{" "}
              <Link href={"/auth/register"} className="text-[var(--primary-color)] bold hover:text-[var(--primary-color)]/75 ">
                Click here
              </Link>
            </label>
          </div>
          <div className="flex items-start mb-5">
            <label className="ms-2 text-sm font-medium text-[#293133]/75">
              If you are a new user, please{" "}
              <Link href={"/auth/register"} className="text-[var(--primary-color)] bold hover:text-[var(--primary-color)]/75">
                Sign Up
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
