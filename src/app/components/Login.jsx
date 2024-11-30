"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Login = ({ close }) => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
 
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      alert("Sign in Successfully", userCredential.user);
      
      // Ensure localStorage is accessed on the client side only
      if (typeof window !== "undefined") {
        localStorage.setItem("Token", userCredential.user.accessToken);
      }
      
      close();
      router.push("/");
      return userCredential.user;
    } catch (error) {
      alert("Error signing in:", error.message);
      throw error;
    }
  };

  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      close();
    }
  };

  return (
    <div
      className="outer h-[100%] w-full inset-0 fixed opacity-0.5 bg-gray-100/80 flex items-center justify-center"
      ref={modelRef}
      onClick={closeModel}
    >
      <div className="w-[400px] h-[90%] bg-white p-6 shadow-lg flex flex-col items-center">
        <img src="logo.png" alt="logo" className="h-[157px] w-[190px] mt-[94px]" />

        <form onSubmit={signIn} className="max-w-sm mx-auto flex flex-col items-center">
          <div className="mb-5">
            <input
              type="email"
              id="email"
              className="custom-input"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              className="custom-input"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              If you are a new user, please{" "}
              <Link href={"/register"} className="text-blue-400 underline">
                Sign Up
              </Link>
            </label>
          </div>
          <button
            type="submit"
            onClick={signIn}
            className="text-white bg-[#2D5B97] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-[322px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
